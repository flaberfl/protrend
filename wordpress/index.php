<?php

/*
Template Name: Protrend
*/
/*
<?php bloginfo('template_url'); ?>/assets/
<meta charset="<?php bloginfo('charset'); ?>">


  <?php echo do_shortcode('[contact-form-7 id="73" title="Связаться с нами"]'); ?>


						<?php

						$loop2 = $row['text-types-crm__item-list'];

						foreach ($loop2 as $row2) {

						?>

							ВНУТРЕННИЙ ЦИКЛ

						<?php
						}
						?>


	<li class="text-types-crm__item">

												<?php
												if (!empty($row2['text-types-crm__item-name'])) {
												?>
													<h5 class="text-types-crm__name"><?= $row2['text-types-crm__item-name']; ?></h5>
												<?php
												}
												?>
												<p><?= $row2['text-types-crm__item-text']; ?></p>
</li>

<?= $row['types-crm__icon']; ?>



									<?php
									if (!empty($row['text-types-crm__descr'])) {
									?>
										<p class="text-types-crm__descr"><?= $row['text-types-crm__descr']; ?></p>
									<?php
									}
									?>



						<?php

						$loop = CFS()->get('step-one-plans__items');

						foreach ($loop as $row) {

						?>

							ЦИКЛ

						<?php
						}
						?>

*/

get_header();
?>

<main class="page">

	<section class="page__promo promo">
		<div class="promo__container">
			<div data-watch anim-up-down anim-up-down class="promo__image">
				<img data-src="<?= CFS()->get('promo__image'); ?>" alt="Дом в облаках">
				<div class="promo__decor-text decor-text">
					<div class="promo__decor-text-itemA decor-text-itemA">1
						0
						0
						0
						1
						0
						0
						0
						0
						1
					</div>
					<div class="promo__decor-text-itemB decor-text-itemB">&nbsp 0
						0
						0
						0
						1
						1
						0
						0
						0
						0
					</div>
					<div class="promo__decor-text-itemC decor-text-itemC">0
						0
						0
						0
						1
						1
						0
						0
						0
						0
					</div>
					<div class="promo__decor-text-itemD decor-text-itemD">0
						0
						1
						0
						0
						0
					</div>
				</div>
			</div>
			<div class="promo__content">
				<h1 data-watch anim-up-down class="promo__title title">
					<span class="promo__name"><?= CFS()->get('promo__title'); ?></span><span class="promo__symbol"> -</span> <br> <?= CFS()->get('promo__subtitle'); ?>
				</h1>
				<h2 data-watch anim-up-down class="promo__text"><?= CFS()->get('promo__text'); ?></h2>
				<button data-popup="#popup-quiz" class="button promo__button">Оставить заявку</button>
			</div>

			<div class="promo__decor">
				<div class="promo__scroll-down">
					<img data-goto=".types-crm__navigation" src="<?php bloginfo('template_url'); ?>/assets/img/decor/scroll-mouse-down.svg" alt="Скролл вниз">
					<span>листайте вниз</span>
				</div>
				<div class="promo__social social">
					<ul class="social__list">
						<li data-watch anim-up-down class="social__item">
							<a href="<?= CFS()->get('telegram__link'); ?>" class="social__link social__link_telegram"><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5931 0.0884743C16.4494 0.137031 12.7155 1.46705 8.29559 3.04409C3.34542 4.81031 0.223071 5.94314 0.164945 5.99402C0.0408952 6.10256 -0.0261141 6.31899 0.00954116 6.49599C0.0706415 6.79932 0.0924686 6.80879 2.41239 7.53834L4.53181 8.20485L4.66345 8.13237C4.73585 8.09254 6.96424 6.82474 9.61543 5.31505C14.5678 2.49503 14.5631 2.49746 14.5631 2.71464C14.5631 2.75837 13.9858 3.2795 13.0125 4.11448C12.1597 4.84606 10.4768 6.28926 9.27283 7.32154L7.08371 9.19846L6.95275 10.9156C6.80828 12.8097 6.80667 12.849 6.86773 12.9553C6.92083 13.0477 7.0903 13.1105 7.1994 13.0783C7.2447 13.0649 7.80714 12.5759 8.44934 11.9916C9.0915 11.4074 9.63163 10.9293 9.64964 10.9293C9.66765 10.9293 10.6178 11.5899 11.761 12.3973C12.9042 13.2047 13.9029 13.8966 13.9802 13.9347C14.2843 14.0847 14.7293 13.9665 14.9404 13.6796C15.0091 13.5863 15.3631 12.1465 16.5145 7.27811C17.3315 3.82348 18 0.946741 18 0.885305C18 0.660453 17.9051 0.468059 17.6999 0.276937C17.3835 -0.0177372 17.067 -0.0716107 16.5931 0.0884743Z" fill="#fff" />
								</svg></a>
						</li>
						<li data-watch anim-up-down class="social__item">
							<a href="<?= CFS()->get('instagram__link'); ?>" class=" social__link social__link_instagram"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M6.26255 0.0233401C5.33805 0.0620487 4.7123 0.142477 4.12028 0.29864C2.40578 0.750827 1.15142 1.85246 0.516935 3.46317C0.0743855 4.58654 0.000235568 5.529 5.44786e-07 10.0319C-0.000195308 13.8709 0.0523325 14.9102 0.293349 15.8362C0.883493 18.1035 2.55036 19.5288 5.00338 19.8636C5.71491 19.9607 7.20433 20.0013 10.0464 20.001C12.6893 20.0007 14.2133 19.9634 14.8992 19.8821C16.3009 19.7161 17.4001 19.2331 18.2629 18.4041C19.2394 17.4659 19.7558 16.3419 19.9448 14.7434C20.0189 14.1173 20.0182 5.77294 19.944 5.18355C19.7978 4.02088 19.441 3.02189 18.9136 2.29874C18.8082 2.15423 18.5591 1.87224 18.36 1.67209C17.3905 0.697457 16.1894 0.203902 14.4335 0.058647C13.8034 0.00652727 7.33175 -0.021429 6.26255 0.0233401ZM14.6293 1.89656C15.7731 2.04561 16.4703 2.3459 17.0813 2.95268C17.7687 3.63532 18.0657 4.40633 18.1816 5.80914C18.2514 6.65377 18.2523 13.3655 18.1827 14.1934C18.0688 15.5489 17.7987 16.2804 17.1618 16.9584C16.4844 17.6795 15.6803 18.0092 14.2964 18.1333C13.4961 18.205 6.51466 18.2049 5.75718 18.1331C4.787 18.0412 4.1616 17.872 3.60279 17.5503C3.28759 17.3689 2.65389 16.7426 2.4701 16.4309C2.14036 15.8716 1.94455 15.1098 1.87991 14.1348C1.81391 13.1393 1.787 8.92014 1.83577 7.21673C1.89554 5.12959 1.9704 4.61915 2.32618 3.87371C2.93623 2.59547 4.05165 1.97562 5.94664 1.86169C6.78106 1.81148 14.2055 1.84135 14.6293 1.89656ZM14.8534 3.5823C14.4088 3.80408 14.2 4.14663 14.199 4.65571C14.1983 5.02422 14.2863 5.24251 14.536 5.49173C14.7857 5.74095 15.0044 5.82881 15.3736 5.82811C15.8836 5.82717 16.2267 5.61869 16.4489 5.17487C16.5461 4.98074 16.5683 4.88807 16.5683 4.67596C16.5683 4.29493 16.4774 4.0705 16.2186 3.81217C15.9598 3.55384 15.735 3.46317 15.3533 3.46317C15.1408 3.46317 15.0479 3.4853 14.8534 3.5823ZM9.10841 4.93386C8.07901 5.11935 7.16869 5.60211 6.3984 6.37101C5.38075 7.38677 4.88837 8.56774 4.88837 9.9928C4.88837 11.5049 5.48639 12.8369 6.61513 13.8389C7.57234 14.6886 8.72235 15.1207 10.0268 15.1207C11.4185 15.1207 12.5991 14.6442 13.5943 13.6807C14.2175 13.0775 14.6368 12.4204 14.8996 11.635C15.0889 11.0695 15.1581 10.6297 15.1581 9.9928C15.1581 9.35958 15.0889 8.91604 14.9038 8.36348C14.6518 7.61105 14.2876 7.01631 13.7207 6.43173C12.9466 5.63347 11.9791 5.11642 10.9128 4.9312C10.4775 4.85558 9.53514 4.85695 9.10841 4.93386ZM10.6598 6.72443C12.9907 7.17118 14.1137 9.86338 12.7946 11.8422C12.3061 12.5751 11.5567 13.0779 10.6737 13.2653C10.2431 13.3567 9.47419 13.3168 9.04751 13.1809C7.99154 12.8446 7.19924 12.0636 6.84467 11.0094C6.72422 10.6513 6.71971 10.6148 6.71999 9.9928C6.72022 9.39227 6.72782 9.32467 6.82971 9.01531C7.21671 7.84006 8.18842 6.96051 9.35644 6.72822C9.70522 6.65882 10.3085 6.6571 10.6598 6.72443Z" fill="#fff" />
								</svg></a>
						</li>
						<li data-watch anim-up-down class="social__item">
							<a href="<?= CFS()->get('whatsapp__link'); ?>" class="social__link social__link_whatsapp">
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M7.94684 0.0411591C5.91865 0.317033 4.1128 1.19816 2.69902 2.60173C1.24099 4.04926 0.315639 5.982 0.103684 8.0225C0.0398329 8.63734 0.0784835 9.80156 0.18227 10.3894C0.346544 11.3197 0.61842 12.1386 1.04067 12.9747L1.25277 13.3948L0.620158 15.6927C0.272228 16.9566 -0.00675182 17.9948 0.000124436 17.9999C0.00703847 18.005 1.06681 17.7322 2.35517 17.3938C4.23072 16.901 4.71644 16.7855 4.79208 16.8141C4.84403 16.8338 5.09055 16.942 5.33991 17.0544C6.1385 17.4145 6.98696 17.6582 7.87128 17.7814C8.48009 17.8662 9.60561 17.8662 10.2137 17.7813C12.2014 17.5038 13.9739 16.6313 15.3722 15.2421C16.1034 14.5156 16.5897 13.8511 17.0526 12.9457C17.4695 12.1303 17.7637 11.2414 17.928 10.3002C18.0241 9.75015 18.024 8.13376 17.9278 7.55729C17.7653 6.5832 17.5144 5.80506 17.0859 4.94584C15.7881 2.34371 13.313 0.536358 10.4215 0.0793727C9.87998 -0.00618517 8.45671 -0.028204 7.94684 0.0411591ZM10.3296 1.59841C11.0973 1.73954 11.6889 1.93388 12.3673 2.26788C14.3038 3.2213 15.7565 5.0063 16.2757 7.07043C17.3605 11.3822 14.4987 15.6304 10.0767 16.2727C9.55158 16.3489 8.53344 16.3489 8.00835 16.2727C7.03249 16.131 6.06815 15.7927 5.16615 15.2757L4.95458 15.1545L3.5641 15.5178C2.79933 15.7176 2.16784 15.8754 2.16078 15.8684C2.15375 15.8614 2.31058 15.2672 2.50931 14.548C2.70805 13.8289 2.87217 13.213 2.87402 13.1794C2.87587 13.1458 2.77817 12.9577 2.65689 12.7614C0.875827 9.87851 1.34311 6.07271 3.77337 3.66829C4.98155 2.47296 6.51571 1.73616 8.23021 1.52784C8.69488 1.47137 9.84956 1.51018 10.3296 1.59841ZM5.51548 4.87655C5.29699 4.98413 4.89775 5.45306 4.73083 5.79818C4.39666 6.48919 4.40901 7.33379 4.76541 8.15848C5.28532 9.36163 6.78634 11.09 8.07107 11.9647C8.68079 12.3799 9.5277 12.7747 10.376 13.0393C11.4919 13.3872 12.4242 13.2047 13.1473 12.4968C13.3653 12.2833 13.4092 12.2166 13.4806 11.9895C13.5696 11.7065 13.6205 11.251 13.5807 11.0933C13.5599 11.0108 13.4531 10.9439 12.9164 10.6766C11.9329 10.1869 11.5365 10.0184 11.368 10.0184C11.23 10.0184 11.2065 10.0353 11.0396 10.2533C10.6581 10.7516 10.3081 11.1376 10.2169 11.1603C10.1076 11.1876 9.89301 11.1094 9.39728 10.8618C8.59869 10.4629 7.93778 9.92172 7.37619 9.20682C7.06714 8.81338 6.7945 8.37243 6.7945 8.26599C6.7945 8.21992 6.89228 8.0585 7.01179 7.90733C7.4485 7.35483 7.55014 7.1933 7.55014 7.05153C7.55014 7.009 7.47635 6.80102 7.38616 6.5894C7.29598 6.37774 7.1141 5.94251 6.98198 5.62218C6.81819 5.22517 6.70322 5.00088 6.62078 4.91766L6.49981 4.79554L6.08988 4.79558C5.74625 4.79558 5.65335 4.80869 5.51548 4.87655Z" fill="#fff" />
								</svg>
							</a>
						</li>
						<li data-watch anim-up-down class="social__item social__link_other">
							<a href="<?= CFS()->get('mail__link'); ?>" class="social__link social__link_other"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M8.13 0.0215284C5.99588 0.240351 4.03326 1.18842 2.54935 2.71729C1.82415 3.46445 1.35748 4.12433 0.91057 5.03457C0.461369 5.94945 0.195087 6.82566 0.0442029 7.88511C-0.0147284 8.29896 -0.0147284 9.68812 0.0441677 10.1022C0.191672 11.1388 0.465734 12.0468 0.893919 12.9175C1.37836 13.9027 1.85287 14.5645 2.63626 15.3477C3.4111 16.1222 4.0835 16.6059 5.03206 17.0711C5.69393 17.3957 6.12127 17.5536 6.79226 17.7219C8.48373 18.146 10.1769 18.0849 11.844 17.5395C12.4013 17.3572 13.5203 16.8378 13.4861 16.7772C13.3567 16.548 12.3942 14.8842 12.385 14.8736C12.3779 14.8656 12.1701 14.9556 11.9232 15.0736C10.2503 15.8735 8.44473 15.964 6.68665 15.3358C4.61486 14.5957 2.98095 12.796 2.4463 10.6653C2.28863 10.0369 2.25451 9.73957 2.25451 8.99365C2.25451 8.22893 2.28898 7.94229 2.46239 7.26496C2.87695 5.64557 3.9782 4.1597 5.4317 3.25851C7.46881 1.99547 10.0033 1.9032 12.1232 3.0148C13.4045 3.68665 14.3864 4.69117 15.0265 5.98475C15.4144 6.7685 15.6008 7.38756 15.6995 8.21922C15.7615 8.74171 15.7693 10.0331 15.7121 10.3028C15.6342 10.6703 15.4129 10.9716 15.1026 11.1329C14.951 11.2116 14.8797 11.2255 14.6251 11.2255C14.3699 11.2255 14.2994 11.2117 14.1461 11.1321C13.8811 10.9944 13.7705 10.8878 13.6365 10.6407L13.5162 10.4189L13.5062 8.01708L13.4963 5.61523H12.7257H11.9551L11.6619 5.39423C11.1486 5.00726 10.4905 4.71031 9.83739 4.57092C9.42336 4.48255 8.53094 4.4841 8.1124 4.57387C7.20115 4.76936 6.48352 5.16056 5.82081 5.82304C5.1583 6.48532 4.76775 7.20112 4.57093 8.11385C4.48074 8.53211 4.48074 9.45519 4.57093 9.87344C4.76758 10.7854 5.15732 11.5 5.82081 12.1655C6.47169 12.8182 7.20872 13.2196 8.1124 13.4134C8.53101 13.5032 9.42336 13.5047 9.83739 13.4163C10.6098 13.2515 11.3314 12.9005 11.9193 12.4039L12.0474 12.2957L12.2866 12.5291C12.7099 12.9419 13.2368 13.2413 13.8178 13.399C14.2329 13.5118 15.034 13.5112 15.4524 13.3978C16.6567 13.0716 17.5575 12.1479 17.8899 10.8982C17.9729 10.586 17.9812 10.487 17.996 9.6245C18.0178 8.35421 17.9548 7.69641 17.7232 6.77519C17.5732 6.17862 17.358 5.60123 17.0692 5.02074C16.6305 4.13908 16.1422 3.44809 15.4566 2.73886C14.7033 1.95965 13.9829 1.433 12.9826 0.930322C12.1058 0.489756 11.2347 0.215963 10.2422 0.0690726C9.81173 0.00534019 8.56217 -0.0227781 8.13 0.0215284ZM9.46775 6.79384C10.226 6.95161 10.908 7.5795 11.1499 8.3426C11.2131 8.54207 11.2276 8.66932 11.2263 9.01124C11.2248 9.3758 11.2119 9.46884 11.1319 9.69168C11.0013 10.0558 10.8414 10.3096 10.5752 10.5758C10.3089 10.8419 10.055 11.0017 9.69077 11.1324C9.46786 11.2123 9.37478 11.2252 9.0101 11.2266C8.66806 11.228 8.54076 11.2135 8.34123 11.1503C7.64835 10.9308 7.05576 10.3428 6.84165 9.66229C6.80204 9.53648 6.76128 9.29102 6.75107 9.11682C6.66447 7.64253 8.01133 6.49088 9.46775 6.79384Z" fill="#fff" />
								</svg></a>
						</li>
					</ul>
				</div>
				<div class="promo__decor-ellipse decor-ellipse">
					<img data-src="<?php bloginfo('template_url'); ?>/assets/img/decor/elipse.svg" alt="Декоративный круг">
				</div>
			</div>

		</div>
	</section>

	<section class="page__types-crm types-crm">
		<div class="types-crm__container">
			<div data-tabs class="tabs types-crm__body">
				<nav data-watch anim-up-down data-tabs-titles class="tabs__navigation types-crm__navigation">

					<?php

					$loop = CFS()->get('tabs-titles');

					foreach ($loop as $row) {

					?>

						<div class="types-crm__button tabs__title">
							<div class="types-crm__icon">
								<img data-src="<?= $row['types-crm__icon']; ?>" alt="<?= $row['types-crm__name']; ?>">
							</div>
							<h3 class="types-crm__name"><?= $row['types-crm__name']; ?></h3>
						</div>

					<?php
					}
					?>

				</nav>

				<div data-watch anim-up-down data-tabs-body class="tabs__content types-crm__content">

					<?php

					$loop = CFS()->get('tabs__content');

					foreach ($loop as $row) {

					?>
						<div class="tabs__body">
							<div data-watch anim-up-down class="types-crm__item">
								<div class="types-crm__image">
									<img src="<?= $row['types-crm__image']; ?>" alt="<?= $row['text-types-crm__title']; ?>">
								</div>
								<div class="types-crm__text text-types-crm">
									<h2 class="text-types-crm__title"><?= $row['text-types-crm__title']; ?></h2>
									<p class="text-types-crm__slogan"><?= $row['text-types-crm__slogan']; ?></p>

									<?php
									if (!empty($row['text-types-crm__descr'])) {
									?>
										<p class="text-types-crm__descr"><?= $row['text-types-crm__descr']; ?></p>
									<?php
									}
									?>

									<ul class="text-types-crm__list _icon-top">

										<?php

										$loop2 = $row['text-types-crm__item-list'];

										foreach ($loop2 as $row2) {

										?>

											<li class="text-types-crm__item">

												<?php
												if (!empty($row2['text-types-crm__item-name'])) {
												?>
													<h5 class="text-types-crm__name"><?= $row2['text-types-crm__item-name']; ?></h5>
												<?php
												}
												?>
												<p><?= $row2['text-types-crm__item-text']; ?></p>
											</li>

										<?php
										}
										?>


									</ul>
								</div>

							</div>
						</div>
					<?php
					}
					?>
				</div>
			</div>
		</div>
	</section>

	<section class="page__corsair-version corsair-version">
		<div class="corsair-version__container">
			<div class="corsair-version__content">
				<h2 data-watch anim-up-down class="corsair-version__title title"><?= CFS()->get('corsair-version__title'); ?><span><?= CFS()->get('corsair-version__name'); ?></span>
				</h2>
				<div data-watch anim-up-down class="corsair-version__text">




					<?php

					$loop = CFS()->get('corsair-version__text');

					foreach ($loop as $row) {

					?>

						<?php
						if (!empty($row['corsair-version__paragraf'])) {
						?>
							<p><?= $row['corsair-version__paragraf']; ?>.</p>

						<?php
						}
						?>

					<?php
					}
					?>

				</div>
			</div>
			<div class="corsair-version__image">
				<img data-watch anim-up-down data-src="<?= CFS()->get('corsair-version__image'); ?>" alt="Пиратская версия">
				<div class="corsair-version__decor-text decor-text">
					<div class="corsair-version__decor-text-itemA decor-text-itemA">1
						0
						0
						0
						1
						0
						0
						0
						0
						1
					</div>
					<div class="corsair-version__decor-text-itemB decor-text-itemB">&nbsp 0
						0
						0
						0
						1
						1
						0
						0
						0
						0
					</div>
					<div class="corsair-version__decor-text-itemC decor-text-itemC">0
						0
						0
						0
						1
						1
						0
						0
						0
						0
					</div>
					<div class="corsair-version__decor-text-itemD decor-text-itemD">0
						0
						1
						0
						0
						0
					</div>
				</div>
			</div>

			<div class="corsair-version__decor-ellipse decor-ellipse">
				<img data-src="<?php bloginfo('template_url'); ?>/assets/img/decor/elipse.svg" alt="Декоративный круг">
			</div>

		</div>
	</section>

	<section class="page__plans plans">
		<div class="plans__container">
			<h2 data-watch anim-up-down class="plans__title title"><?= CFS()->get('plans__title'); ?><span><?= CFS()->get('plans__title2'); ?></span></h2>
			<div class="plans__step-one step-one-plans step-plans">

				<div class="step-plans__header header-step-plans">
					<div class="header-step-plans__number">
						<span class="step-plans__number">1</span>
						<span class="step-plans__step">шаг</span>
					</div>
					<div data-watch anim-up-down class="header-step-plans__title">
						<h3 class="header-step-plans__name"><?= CFS()->get('step-plans__title'); ?></h3>
						<h4 class="header-step-plans__subname"><?= CFS()->get('step-plans__slogan'); ?></h4>
					</div>
					<form data-watch anim-up-down action="" class="step-one-plans__form form-step-one form-step">
						<label for="form-input" class="form-step__lable">Введите количество:</label>

						<input id="num" min="1" max="50" type="number" name="form-input-one" data-error="Ошибка" placeholder="" class="form-step__input input">

						<span id="result"></span>
						<p class="form-step__descr">Обязательно к заполнению!</p>
					</form>
				</div>

				<div data-watch anim-up-down class="swiper plans__slider_one">

					<div class="step-plans__items swiper-wrapper">

						<?php

						$loop = CFS()->get('step-one-plans__items');

						foreach ($loop as $row) {

						?>

							<div class="step-one-plans__item item-step swiper-slide">
								<h4 class="item-step__name"><?= $row['item-step__name']; ?></h4>

								<h5 class="item-step__descr"><?= $row['item-step__descr']; ?></h5>

								<ul class="item-step__list list-item-step">

									<?php

									$loop2 = $row['item-step__list'];

									foreach ($loop2 as $row2) {

									?>
										<li class="list-item-step__item">
											<p class="list-item-step__name"><?= $row2['list-item-step__name']; ?></p>
											<p class="list-item-step__value"><?= $row2['list-item-step__value']; ?></p>
										</li>
									<?php
									}
									?>

								</ul>
								<div class="item-step__footer">
									<p class="item-step__price"><?= $row['item-step__price']; ?></p>
									<p class="item-step__text"><?= $row['item-step__text']; ?></p>
									<div class="item-step__check">
										<img src="<?php bloginfo('template_url'); ?>/assets/img/icons/check-wh.svg" alt="Галочка">
									</div>
								</div>

							</div>

						<?php
						}
						?>
					</div>

				</div>

			</div>
			<div class="swiper-pagination-plans swiper-pagination-plans_one"></div>

			<div class="plans__button-block">
				<div class="b-wrap">
					<button data-watch anim-up-down data-goto=".plans__step-two" class="plans__button plans__button_down">
						<img src="<?php bloginfo('template_url'); ?>/assets/img/icons/arrow-d.svg" alt="Стрелка вниз">
					</button>
					<span data-watch anim-up-down>Перейти <br> ко второму шагу</span>
				</div>
			</div>

			<div data-spollers data-spollers-speed="250" class="spollers plans__faq">


				<?php

				$loop = CFS()->get('plans__faq');

				foreach ($loop as $row) {

				?>
					<div data-watch anim-up-down class="spollers__item">
						<button type="button" data-spoller class="spollers__title"><?= $row['spollers__title']; ?>
							<span class="circle"></span>
						</button>
						<div class="spollers__body">

							<?php

							$loop2 = $row['spollers__texts'];

							foreach ($loop2 as $row2) {

							?>

								<p><?= $row2['spollers__text']; ?></p>

							<?php
							}
							?>
						</div>
					</div>
				<?php
				}
				?>

			</div>

			<div class="plans__step-two step-two-plans step-plans">

				<div class="step-plans__header header-step-plans">
					<div class="header-step-plans__number">
						<span class="step-plans__number">2</span>
						<span class="step-plans__step">шаг</span>
					</div>
					<div data-watch anim-up-down class="header-step-plans__title">
						<h3 class="header-step-plans__name"><?= CFS()->get('step-plans__title2'); ?></h3>
						<h4 class="header-step-plans__subname"><?= CFS()->get('step-plans__slogan2'); ?></h4>
					</div>
					<form data-watch anim-up-down action="" class="step-one-plans__form form-step-two form-step">
						<label for="form-input" class="form-step__lable">Введите количество:</label>
						<input id="num2" autocomplete="off" min="1" max="50" type="number" name="form-input-two" data-error="Ошибка" placeholder="" class="form-step__input input">
						<p class="form-step__descr">Обязательно к заполнению!</p>
					</form>
				</div>

				<div data-watch anim-up-down class="swiper plans__slider_two">

					<div class="step-plans__items swiper-wrapper">



						<?php

						$loop = CFS()->get('step-one-plans__items2');

						foreach ($loop as $row) {

						?>

							<div class="step-two-plans__item item-step swiper-slide">
								<h4 class="item-step__name"><?= $row['item-step__name2']; ?></h4>

								<h5 class="item-step__descr"><?= $row['item-step__descr2']; ?></h5>

								<ul class="item-step__list list-item-step">

									<?php

									$loop2 = $row['item-step__list2'];

									foreach ($loop2 as $row2) {

									?>
										<li class="list-item-step__item">
											<p class="list-item-step__name"><?= $row2['list-item-step__name2']; ?></p>
											<p class="list-item-step__value"><?= $row2['list-item-step__value2']; ?></p>
										</li>
									<?php
									}
									?>

								</ul>
								<div class="item-step__footer">
									<p class="item-step__price"><?= $row['item-step__price2']; ?> <span class="set-month">мес</span></p>
									<p class="item-step__text"><?= $row['item-step__text2']; ?></p>
									<div class="item-step__check">
										<img src="<?php bloginfo('template_url'); ?>/assets/img/icons/check-wh.svg" alt="Галочка">
									</div>
								</div>

							</div>

						<?php
						}
						?>

					</div>


				</div>

			</div>

			<div class="swiper-pagination-plans swiper-pagination-plans_two"></div>

			<div class="plans__button-block plans__button-block_up">
				<button data-watch anim-up-down data-popup="#popup-submit" type="submit" class="plans__button_left button button_tr-b button_248">Связаться с
					нами</button>
				<div class="b-wrap">
					<button data-watch anim-up-down data-goto=".plans__step-one" class="plans__button plans__button_up">
						<img src="<?php bloginfo('template_url'); ?>/assets/img/icons/arrow-up.svg" alt="Стрелка вверх">
					</button>
					<span>Вернуться <br> к первому шагу</span>
				</div>
				<button data-watch anim-up-down data-popup="#popup-quiz" type="submit" class="plans__button_right button button_248">Оформить заявку</button>

			</div>

			<div data-spollers data-spollers-speed="150" class="spollers plans__faq plans__faq_sec">


				<?php

				$loop = CFS()->get('plans__faq2');

				foreach ($loop as $row) {

				?>
					<div data-watch anim-up-down class="spollers__item">
						<button type="button" data-spoller class="spollers__title"><?= $row['spollers__title2']; ?>
							<span class="circle"></span>
						</button>
						<div class="spollers__body">

							<?php

							$loop2 = $row['spollers__texts2'];

							foreach ($loop2 as $row2) {

							?>

								<p><?= $row2['spollers__text2']; ?></p>

							<?php
							}
							?>
						</div>
					</div>
				<?php
				}
				?>

			</div>

			<div class="plans__step-three step-three-plans step-plans">

				<div class="step-plans__header header-step-plans step-three-plans__header">
					<div class="header-step-plans__number">
						<span class="step-plans__number">3</span>
						<span class="step-plans__step">шаг</span>
					</div>
					<div data-watch anim-up-down class="header-step-plans__title">
						<h3 class="header-step-plans__name">Процесс <br> внедрения</h3>
					</div>
				</div>

				<div class="step-plans__operation operation-plans">
					<div data-watch anim-up-down class="operation-plans__items">
						<div class="operation-plans__item item-operation item-operation_1">
							<div class="item-operation__icon item-operation__icon_1">
								<img src="<?php bloginfo('template_url'); ?>/assets/img/steps/item-1.svg" alt="Сбор информации">
							</div>
							<div class="item-operation__name"><?= CFS()->get('item-operation__name'); ?></div>
							<ul class="item-operation__list">

								<?php
								$loop = CFS()->get('item-operation__list');
								foreach ($loop as $row) {
								?>
									<li class="item-operation__item"><?= $row['item-operation__item']; ?></li>
								<?php
								}
								?>

							</ul>
						</div>
						<div class="operation-plans__item item-operation item-operation_2">
							<div class="item-operation__icon item-operation__icon_2">
								<img src="<?php bloginfo('template_url'); ?>/assets/img/steps/item-2.svg" alt="Ввод данных в Protrend">
							</div>
							<div class="item-operation__name"><?= CFS()->get('item-operation__name2'); ?></div>
							<ul class="item-operation__list">

								<?php
								$loop = CFS()->get('item-operation__list2');
								foreach ($loop as $row) {
								?>
									<li class="item-operation__item"><?= $row['item-operation__item2']; ?></li>
								<?php
								}
								?>

							</ul>
						</div>
						<div class="operation-plans__item item-operation item-operation_3">
							<div class="item-operation__icon item-operation__icon_3">
								<img src="<?php bloginfo('template_url'); ?>/assets/img/steps/item-3.svg" alt="Интеграции с Protrend">
							</div>
							<div class="item-operation__name"><?= CFS()->get('item-operation__name3'); ?></div>
							<ul class="item-operation__list">
								<?php
								$loop = CFS()->get('item-operation__list3');
								foreach ($loop as $row) {
								?>
									<li class="item-operation__item"><?= $row['item-operation__item3']; ?></li>
								<?php
								}
								?>
							</ul>
						</div>
						<div class="operation-plans__item item-operation item-operation_4">
							<div class="item-operation__icon item-operation__icon_4">
								<img src="<?php bloginfo('template_url'); ?>/assets/img/steps/item-4.svg" alt="Ввод в эксплуатацию">
							</div>
							<div class="item-operation__name"><?= CFS()->get('item-operation__name4'); ?></div>
							<ul class="item-operation__list">
								<?php
								$loop = CFS()->get('item-operation__list4');
								foreach ($loop as $row) {
								?>
									<li class="item-operation__item"><?= $row['item-operation__item4']; ?></li>
								<?php
								}
								?>
							</ul>
						</div>
					</div>
				</div>

			</div>

			<div class="plan__questions question-plan">
				<h3 data-watch anim-up-down class="question-plan__title">остались вопросы?</h3>
				<div data-watch anim-up-down class="question-plan__button">
					<button data-popup="#popup-submit" type="submit" class="button">Связаться</button>
					<span>Свяжитесь с нами</span>
				</div>
			</div>

			<div class="plans__decor-ellipse decor-ellipse">
				<img data-src="<?php bloginfo('template_url'); ?>/assets/img/decor/elipse.svg" alt="Декоративный круг">
			</div>

		</div>
	</section>

	<section class="page__clients-reviews clients-reviews">
		<div class="clients-reviews__container">
			<h2 data-watch anim-up-down class="clients-reviews__title title"><?= CFS()->get('clients-reviews__title'); ?><span><?= CFS()->get('clients-reviews__title2'); ?></span></h2>
			<h3 data-watch anim-up-down class="clients-reviews__subtitle">Они доверяют свои проекты Protrend</h3>
			<div class="swiper clients-reviews__slider">
				<div class="clients-reviews__clients swiper-wrapper">


					<?php

					$loop = CFS()->get('clients-reviews__clients');

					foreach ($loop as $row) {

					?>
						<div class="swiper-slide clients-reviews__logo">

							<img src="<?= $row['clients-reviews__logo']; ?>" alt="Логотип клиента">

						</div>

					<?php
					}
					?>


				</div>
			</div>

			<div data-watch anim-up-down class="clients-reviews__reviews reviews-clients reviews-clients__slilder">

				<ul class="reviews-clients__list swiper-wrapper">



					<?php

					$loop = CFS()->get('reviews-clients__list');

					foreach ($loop as $row) {

					?>

						<li class="reviews-clients__item reviews swiper-slide">

							<div class="reviews__label"><?= $row['reviews__label']; ?></div>
							<div class="reviews__image">
								<img src="<?= $row['reviews__image']; ?>" alt="Логотип отзыва">
							</div>
							<div class="reviews__name"><?= $row['reviews__name']; ?></div>
							<div class="reviews__position"><?= $row['reviews__position']; ?></div>
							<div class="reviews__job"><?= $row['reviews__job']; ?></div>
							<div class="reviews__audio">
								<div class="reviews__audio">
									<audio controls src="<?= $row['reviews__audio']; ?>"></audio>
								</div>
							</div>
						</li>
					<?php
					}
					?>

				</ul>

				<div class="swiper-pagination-reviews"></div>

			</div>


		</div>
	</section>

	<section class="page__seo-block seo-block">
		<div class="__container">
			<h2 data-watch anim-up-down class="seo-block__title title"><span><?= CFS()->get('seo-block__title'); ?></span> <?= CFS()->get('seo-block__title2'); ?>
			</h2>
			<div data-watch anim-up-down class="seo-block__container">


				<div class="seo-block__image">

					<img src="<?= CFS()->get('seo-block__image'); ?>" alt="Изображение блока статей">
					<div class="seo-block__decor-text decor-text">
						<div class="seo-block__decor-text-itemA decor-text-itemA">1
							0
							0
							0
							1
							0
							0
							0
							0
							1
						</div>
						<div class="seo-block__decor-text-itemB decor-text-itemB">&nbsp 0
							0
							0
							0
							1
							1
							0
							0
							0
							0
						</div>
						<div class="seo-block__decor-text-itemC decor-text-itemC">0
							0
							0
							0
							1
							1
							0
							0
							0
							0
						</div>
						<div class="seo-block__decor-text-itemD decor-text-itemD">0
							0
							1
							0
							0
							0
						</div>
					</div>
				</div>


				<div class="seo-block__content">
					<div data-watch anim-up-down class="seo-block__text">

						<?php

						$loop = CFS()->get('seo-block__texts');

						foreach ($loop as $row) {

						?>

							<p><?= $row['seo-block__text']; ?></p>

						<?php
						}
						?>

					</div>
				</div>

				<div class="seo-block__decor-ellipse decor-ellipse">
					<img data-src="<?php bloginfo('template_url'); ?>/assets/img/decor/elipse.svg" alt="Декоративный круг">
				</div>

			</div>
		</div>
	</section>
</main>

<?php get_footer(); ?>