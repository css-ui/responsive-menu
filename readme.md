## Responsive menu

Simple responsive sidebar menu.

## Installation

```
npm install --save css-ui-responsive-menu
```

## Demo

- https://css-ui.github.io/responsive.menu/light
- https://css-ui.github.io/responsive.menu/dark

## Quick start

CSS dependencies.

```html
<link rel="stylesheet" href="path/to/perfect-scrollbar.css">
<link rel="stylesheet" href="path/to/font-awesome.css">
<link rel="stylesheet" href="path/to/open-sans.css">
<link rel="stylesheet" href="path/to/cssui.css">
```

CSS menu style.

```html
<link rel="stylesheet" href="path/to/style.menu.css">
```

CSS light or dark theme for menu. Choose one.

```html
<link rel="stylesheet" href="path/to/style.menu.light.css">
<link rel="stylesheet" href="path/to/style.menu.dark.css">
```

Set font and background color.

```html
<style>
	body {
		background: #f2f2f2;
		font-family: 'Open Sans', sans-serif;
	}
</style>
```

Simple menu html.

```html
<!-- nav wrapper -->
<div class="nav">

	<!-- click show/hide menu -->
	<div class="click"></div>
	<div class="sidebar">

		<!-- title for sidebar -->
		<div class="title">
			<p>Title for sidebar</p>
		</div>
		<div class="responsive">
			<ul class="menu scrollbar">

				<!-- simple menu -->
				<li>
					<span class="name">Simple menu</span>
					<ul>
						<li><a href="#">One</a></li>
						<li><a href="#" class="current">Two</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>

<!-- content wrapper -->
<div class="content-wrapper">
	<h1>Content</h1>
</div>
```

Dropdown menu html.

```html
<!-- nav wrapper -->
<div class="nav">

	<!-- click show/hide menu -->
	<div class="click"></div>
	<div class="sidebar">

		<!-- title for sidebar -->
		<div class="title">
			<p>Title for sidebar</p>
		</div>
		<div class="responsive">
			<ul class="menu scrollbar">

				<!-- dropdown menu -->
				<li>
					<span class="name">Dropdown menu</span>
					<ul>
						<li><a href="#">Click</a></li>
						<li class="parent">
						<a href="#" class="employ current">Europe</a>
							<ul class="submenu">
								<li><a href="#">Germany</a></li>
								<li><a href="#" class="current">France</a></li>
								<li><a href="#">Italy</a></li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>

<!-- content wrapper -->
<div class="content-wrapper">
	<h1>Content</h1>
</div>
```

Notice info.

```html
<li><a href="#">Notice<span class="notice">3</span></a></li>
```

javascript libraries and plugins.

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/perfect-scrollbar.js"></script>
<script>
	$(function() {

		// perfect scrollbar
		const ps = new PerfectScrollbar('.scrollbar');

		// click show/hide menu
		$('.nav .click').on('click', function() {
			$('.nav .responsive').toggleClass('expandable');
		});

		// responsive menu
		$('ul.menu li').each(function() {
			if ($(this).children('li.parent a.current').length > 0 ) {
				$(this).parent().find('ul.submenu').toggle();
				$(this).parent().find('li.parent a.employ').addClass('active');
			}
		});

		// responsive active menu
		$('ul.menu li a').on('click', function() {
			$(this).parent('li.parent').find('a.employ').toggleClass('active');
			$(this).parent().find('ul.submenu').slideToggle('fast');
		});
	});
</script>
```

Enjoy the menu.
