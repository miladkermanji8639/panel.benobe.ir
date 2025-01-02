<?php

// config/cors.php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'supports_credentials' => true,
    'allowed_origins' => ['http://localhost:3000'],
    'allowed_methods' => ['*'],
    'allowed_headers' => ['*'],
];
