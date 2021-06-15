<?php get_header(); ?>
<main class="main">
    <section>
        <div class="landing_page">
            <h1 class="sro" role="heading" aria-level="1"><?php the_title(); ?></h1>
            <img src="<?= dw_asset('img/landing.png')?>" alt="" class="img__landing">
            <a href="https://www.instagram.com/easyspacy/?hl=fr" target="_blank" class="button__link blue">Rejoignez-nous sur Instagram</a>
        </div>
    </section>
    <section class="posts__section">
        <h1 class="title" role="heading" aria-level="1">Les capsules les + récentes</h1>
        <div class="posts__container">
            <?php
            $posts = new WP_Query([
                'post_type' => 'capsule',
                'posts_per_page' => 4,
                'orderby' => 'date',
                'order' => 'asc',
            ]);

            if ($posts->have_posts()) : while ($posts->have_posts()) : $posts->the_post(); ?>
                <article class="posts">
                    <h2 class="sro" role="heading" aria-level="2">
                        <?php the_title(); ?>
                    </h2>
                    <div class="post__card">
                        <div class="post__fig">
                            <a href="<?php the_permalink(); ?>" class="post__link">
                                <span class="sro">En savoir plus sur "<?php the_title(); ?>"</span>
                            </a>
                            <img <?= dw_the_img_attributes(get_field('cover_img'), ['thumbnail', 'medium', 'large']); ?>
                                    class="post__img">
                        </div>
                        <div class="post__info">
                            <div class="post__interaction">
                                <a href="" class="post__like"><img src="<?= dw_asset('img/heart.png')?>" alt="icone de coeur"></a>
                                <a href="" class="post__comment"><img src="<?= dw_asset('img/comments.png')?>" alt="icone de commentaire"></a>
                            </div>
                            <p class="post__difficulty">Difficulté: <?php the_field('difficulty'); ?></p>
                            <p class="post__date"><?php the_field('date'); ?></p>
                            <a href="<?php the_permalink(); ?>" class="more-info">Lire<img src="<?= dw_asset('img/next.png')?>" alt="icone de fleche"></a>
                        </div>
                    </div>
                </article>
            <?php endwhile; else: ?>
                <p class="post__empty">Il n'y a pas encore de capsules</p>
            <?php endif; ?>
        </div>
        <a href="http://easy-spacy.local/capsules/" class="button__link white">Toutes les capsules</a>
    </section>

    <section class="news__section">
        <h1 class="title" role="heading" aria-level="1">A la une</h1>
        <div class="news__container">
            <?php
            $news = new WP_Query([
                'post_type' => 'news',
                'posts_per_page' => 3,
                'orderby' => 'date',
                'order' => 'asc',
            ]);

            if ($news->have_posts()) : while ($news->have_posts()) : $news->the_post(); ?>
                <article class="news">
                    <div class="new__card">
                        <div class="new__fig">
                            <a href="<?php the_permalink(); ?>" class="new__link">
                                <span class="sro">En savoir plus sur "<?php the_title(); ?>"</span>
                            </a>
                            <img <?= dw_the_img_attributes(get_field('cover_img'), ['thumbnail', 'medium', 'large']); ?>
                                    class="new__img">
                        </div>
                        <div class="new__info">
                            <h2 class="new__title" role="heading" aria-level="2"><?php the_title(); ?></h2>
                            <p class="new__newspaper"><?php the_field('newspaper-name'); ?></p>
                            <p class="new__date"><?php the_field('date'); ?></p>
                            <a href="" class="more-info">Lire<img src="<?= dw_asset('img/next.png')?>" alt="icone de fleche"></a>

                        </div>
                    </div>
                </article>
            <?php endwhile; else: ?>
                <p class="news__empty">Il n'y a pas encore de news</p>
            <?php endif; ?>
        </div>
        <a href="http://easy-spacy.local/news/" class="button__link white">Toutes les news</a>
    </section>

    <section class="avatars">
        <h2 class="sro" role="heading" aria-level="2">Les avatars</h2>
        <img src="<?= dw_asset('img/avatar-homme.svg')?>" class="imgL" alt="avatar de leo">
        <img src="<?= dw_asset('img/avatar-femme.svg')?>" class="imgS" alt="avatar de sarah">
    </section>

    <section class="small_presentation">
        <h2 class="presentation__title" role="heading" aria-level="2">Easy Spacy</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. In fermentum posuere urna nec tincidunt praesent semper feugiat. Purus semper eget duis at
            tellus. Vitae ultricies leo integer malesuada nunc vel risus. Condimentum lacinia quis vel eros. Integer
            quis auctor elit sed vulputate mi sit. </p>
        <a href="http://easy-spacy.local/a-propos/" class="button__link">En apprendre plus</a>
    </section>
</main>
<?php get_footer(); ?>
