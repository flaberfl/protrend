<?php
add_action( 'wp_enqueue_scripts', 'add_scripts_and_styles' );
add_action( 'after_setup_theme', 'add_features');
add_action( 'after_setup_theme', 'add_menu');
function add_scripts_and_styles () {
wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/app.min.js', 'null', 'null', true);
  
wp_enqueue_style( 'style', get_stylesheet_uri() );

}
function add_features () {
  add_theme_support( 'custom-logo', [
    'height'      => 45,
    'width'       => 45,
    'flex-width'  => false,
    'flex-height' => false,
    'header-text' => '',
    'unlink-homepage-logo' => false, // WP 5.5
  ] );
}

function add_menu () {
  register_nav_menu('top', 'Главное меню сайта' );
}

function add_menu_link_class( $atts, $item, $args ) {
  if (property_exists($args, 'link_class')) {
    $atts['class'] = $args->link_class;
  }
  return $atts;
}
add_filter( 'nav_menu_link_attributes', 'add_menu_link_class', 1, 3 );

add_filter( 'upload_mimes', 'svg_upload_allow' );

add_filter('wpcf7_autop_or_not', '__return_false');


add_filter('wpcf7_form_elements', function($content) {

  $content = preg_replace('/<(span).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);
  return $content;
  
  });


add_filter('wpcf7_autop_or_not', '__return_false');

# Добавляет SVG в список разрешенных для загрузки файлов.
function svg_upload_allow( $mimes ) {
	$mimes['svg']  = 'image/svg+xml';

	return $mimes;
}


function custom_add_form_tag_img_handler( $tag ) {
    return '<img src="' . get_stylesheet_directory_uri() . '/assets/img/quiz/' . $tag['options'][0] . '">';
}

/**
 * Hook to add custom 'img' tag to CF7.
 * Usage in CF7: [acf source]
 */
function custom_add_form_tag_img() {
    wpcf7_add_form_tag( 'img', 'custom_add_form_tag_img_handler' );
}

add_action( 'wpcf7_init', 'custom_add_form_tag_img' );


?>