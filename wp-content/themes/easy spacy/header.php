<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Easy Spacy</title>
    <link rel="icon" href="<?= dw_asset('img/logo.png')?>">
    <link rel="stylesheet" href="<?= dw_asset('css/theme.css') ?>">
    <?php wp_head(); ?>
</head>
<body>
<header class="top <?php if (is_front_page()) {
    echo ('header-index');
} ?>">
    <h1 class="sro">Easy Spacy</h1>
    <a href="http://easy-spacy.local/" class="logo"><img src="<?= dw_asset('img/logo.png') ?>" alt="logo de Easy Spacy"></a>
    <div class="menu-btn">
        <div class="menu-btn-burger"></div>
    </div>
    <nav class="top__menu menu" role="navigation">
        <h2 class="sro" role="heading" aria-level="2">Navigation principale</h2>

        <?php foreach(dw_menu('main') as $link): ?>
            <a href="<?= $link->url; ?>" class="menu__link__start <?=  $link->active ?> <?php if(is_front_page()){
                echo ('nav-white');
            } ?>"><?= $link->label; ?></a>
        <?php endforeach; ?>
    </nav>
    <form id="search-bar">
        <input type="search" name="search" placeholder="Rechercher dans le site">
    </form>
</header>
