<?php /* Template Name: Page a propos */
get_header(); ?>
<main class="about">
    <section class="container">
        <div class="bulle1">
            <p>
                <?php the_field('text_leo'); ?>
            </p>
        </div>
        <img src="<?= dw_asset('img/avatar-femme.svg') ?>" alt="avatar de sarah" class="img1">
        <div class="bulle2">
            <p>
                <?php the_field('text_sarah'); ?>
            </p>
        </div>
        <img src="<?= dw_asset('img/avatar-homme.svg') ?>" alt="avatar de leo" class="img2">
    </section>
    <section class="presentation__easy-spacy">
        <h1 class="presentation__title white" role="heading" aria-level="1">
            Easy Spacy
        </h1>
        <p class="presentation__text">
            <?php the_field('text_easy_spacy'); ?>
        </p>
    </section>
</main>
<?php get_footer(); ?>
