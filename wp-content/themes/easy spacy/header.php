<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Easy Spacy</title>
    <link rel="stylesheet" href="<?= dw_asset('css/theme.css') ?>">
    <?php wp_head(); ?>
</head>
<body>
<header class="top">
    <a href="http://easy-spacy.local/" class="logo"><img src="<?= dw_asset('img/logo.png') ?>" alt="logo de Easy Spacy"></a>
    <a href="" class="more-info__header"><img src="<?= dw_asset('img/menu.png')?>" alt="icone du menu"></a>

    <nav class="top__menu menu" role="navigation">
        <h1 class="sro">Navigation principale</h1>

        <?php foreach(dw_menu('main') as $link): ?>
            <a href="<?= $link->url; ?>" class="menu__link__start <?=  $link->active ?>"><?= $link->label; ?></a>
        <?php endforeach; ?>
    </nav>
    <form id="search-bar">
        <input type="search" name="search" placeholder="Rechercher dans le site">
    </form>
</header>
