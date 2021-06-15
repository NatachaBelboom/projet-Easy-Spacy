<?php /* Template Name: Page contact */
get_header();?>
<main class="contact">
    <section class="formulaire">
        <h1 class="contact__title" role="heading" aria-level="1">Contacte-nous !</h1>
        <?= do_shortcode('[contact-form-7 id="58" title="Contact"]') ?>
    </section>
    <div class="color">

    </div>
</main>
<?php get_footer(); ?>
