<footer class="end">
    <nav class="end__menu menu" role="navigation">
        
        <div class="navigation_link">
            <h2 class="sro" role="heading" aria-level="2">Navigation pied de page</h2>
            <a href="http://easy-spacy.local/" class="logo2"><img src="<?= dw_asset('img/logo.png') ?>" alt="logo de Easy Spacy"></a>
            <div class="menu">
                <?php foreach(dw_menu('footer') as $link): ?>
                    <a href="<?= $link->url; ?>" class="menu__link__end"><?= $link->label; ?></a>
                <?php endforeach; ?>
                <a href="https://www.instagram.com/easyspacy/?hl=fr" class="instagram" target="_blank"><img src="<?= dw_asset('img/instagram.png')?>" alt=""></a>
            </div>
        </div>
    </nav>
</footer>
<?php wp_footer(); ?>
<!--<?php if (is_front_page()): ?>
    <script src="<?= dw_asset('js/app.js') ?>"></script>
<?php endif; ?>-->
    <script src="<?= dw_asset('js/menu.js') ?>"></script>
</body>
</html>