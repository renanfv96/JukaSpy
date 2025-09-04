<?php
header('Content-Type: application/json');

// Verifica se o usuário foi passado
if (!isset($_GET['user'])) {
    echo json_encode(['error' => 'Usuário não informado']);
    exit;
}

$user = $_GET['user'];

// Coloque aqui o SEU API Token do Apify
$apiToken = "jM1SBExdrLFfTXsy0";

// Endpoint do seu actor Apify
$apiUrl = "https://f66r4psqcivv.runs.apify.net?token=" . $apiToken;

// Payload que o Apify espera
$payload = [
    "directUrls" => ["https://www.instagram.com/$user/"],
    "resultsType" => "posts",    // ou "details" dependendo do que você quer
    "resultsLimit" => 1
];

// Inicia cURL
$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $apiUrl,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload)
]);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo json_encode(['error' => 'Erro cURL: ' . curl_error($ch)]);
    exit;
}

curl_close($ch);

// Decodifica resposta
$data = json_decode($response, true);

if (!$data || isset($data['error'])) {
    echo json_encode([
        "error" => "Erro ao buscar dados no Apify",
        "raw" => $data
    ]);
    exit;
}

// Aqui você pode normalizar conforme seu front precisa
echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
