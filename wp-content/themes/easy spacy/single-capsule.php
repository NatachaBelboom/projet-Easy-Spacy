<?php get_header(); ?>
<main>
    <section class="container__slider">
        <div class="slider">
            <?php the_field('slider'); ?>
        </div>
    </section>
    <section class="explanation">
        <h1 class="explanation__title" role="heading" aria-level="1">Explication</h1>
        <p><?php the_field('description'); ?></p>
        <a href="<?php the_field('instagram_link'); ?>" target="_blank" class="button__link blue">La capsule sur Instagram</a>
    </section>
</main>
<?php get_footer(); ?>
