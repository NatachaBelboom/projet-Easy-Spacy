<?php /* Template Name: Page capsules */
get_header(); ?>
<main>

    <section class="posts__section">
        <h1 class="title">Toutes les capsules</h1>
        <div class="posts__container">
            <?php
            $posts = new WP_Query([
                'post_type' => 'capsule',
                'orderby' => 'date',
                'order' => 'asc',
            ]);

            if ($posts->have_posts()) : while ($posts->have_posts()) : $posts->the_post(); ?>
                <article class="posts">
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
                                <a href="" class="post__like"><img src="<?= dw_asset('img/heart.png') ?>"
                                                                   alt="icone de coeur"></a>
                                <a href="" class="post__comment"><img src="<?= dw_asset('img/comments.png') ?>"
                                                                      alt="icone de commentaire"></a>
                            </div>
                            <p class="post__difficulty">Difficulté: <?php the_field('difficulty'); ?></p>
                            <p class="post__date"><?php the_field('date'); ?></p>
                            <a href="<?php the_permalink(); ?>" class="more-info">Lire<img src="<?= dw_asset('img/next.png') ?>"
                                                                  alt="icone de fleche"></a>
                        </div>
                    </div>
                </article>
            <?php endwhile; else: ?>
                <p class="post__empty">Il n'y a pas encore de capsules</p>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>

