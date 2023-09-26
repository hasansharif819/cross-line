<?php

namespace Drupal\owlcarousel;

/**
 * Global owl carousel class.
 */
class OwlCarouselGlobal {

  /**
   * Default settings for owl.
   */
  public static function defaultSettings($key = NULL) {
    $settings = [
      'image_style' => '',
      'image_link' => '',
      'items' => 1,
      'margin' => '0',
      'nav' => FALSE,
      'autoplay' => FALSE,
      'autoplayHoverPause' => FALSE,
      'loop' => FALSE,
      'dots' => TRUE,
      'dimensionMobile' => '0',
      'itemsMobile' => 1,
      'dimensionDesktop' => '0',
      'itemsDesktop' => 1,
    ];

    return $settings[$key] ?? $settings;
  }

  /**
   * Return formatted js array of settings.
   */
  public static function formatSettings($settings) {
    $settings['items'] = (int) $settings['items'];

    $settings['margin'] = (int) $settings['margin'];
    $settings['nav'] = (bool) $settings['nav'];
    $settings['autoplay'] = (bool) $settings['autoplay'];
    $settings['autoplayHoverPause'] = (bool) $settings['autoplayHoverPause'];
    $settings['loop'] = (bool) $settings['loop'];
    $settings['dots'] = (bool) $settings['dots'];

    if ($settings['itemsMobile']) {
      $dimensioneMobile = (int) $settings['dimensionMobile'];
      $itemsMobile['items'] = (int) $settings['itemsMobile'];
      $settings['responsive'][$dimensioneMobile] = $itemsMobile;
    }

    if ($settings['itemsDesktop']) {
      $dimensioneDesktop = (int) $settings['dimensionDesktop'];
      $itemsDesktop['items'] = (int) $settings['itemsDesktop'];
      $settings['responsive'][$dimensioneDesktop] = $itemsDesktop;
    }

    if (isset($settings['image_style'])) {
      unset($settings['image_style']);
    }
    if (isset($settings['image_link'])) {
      unset($settings['image_link']);
    }

    return $settings;
  }

}
