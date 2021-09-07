<?php /* Template Name: Page news */
get_header();?>
<main>
    <section class="news__section">
        <h1 class="title" role="heading" aria-level="1">Toutes les news</h1>
        <div class="news__container">
            <?php
            $news = new WP_Query([
                'post_type' => 'news',
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
                            <img <?= dw_the_thumbnail_attributes(['thumbnail', 'medium', 'large']); ?>
                                class="new__img">
                        </div>
                        <div class="new__info">
                            <h2 class="new__title" role="heading" aria-level="2"><?php the_title(); ?></h2>
                            <p class="new__newspaper"><?php the_field('newspaper-name'); ?></p>
                            <p class="new__date"><?php the_field('date'); ?></p>
                            <a href="<?php the_field('link'); ?>" target="_blank" class="more-info">Lire<img src="<?= dw_asset('img/next.png')?>" alt="icone de fleche"></a>
                        </div>
                    </div>
                </article>
            <?php endwhile; else: ?>
                <p class="news__empty">Il n'y a pas encore de news</p>
            <?php endif; ?>
        </div>
    </section>
</main>
<?php get_footer(); ?>

