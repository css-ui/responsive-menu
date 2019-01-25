## CSS UI - Responsive menu

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
<link rel="stylesheet" href="path/to/normalize.css">
<link rel="stylesheet" href="path/to/perfect-scrollbar.css">
<link rel="stylesheet" href="path/to/font-awesome.css">
<link rel="stylesheet" href="path/to/open-sans.css">
<link rel="stylesheet" href="path/to/cssui.css">
```

CSS menu.

```html
<link rel="stylesheet" href="path/to/style.menu.css">
```

CSS light or dark theme. Choose one.

```html
<link rel="stylesheet" href="path/to/style.menu.light.css">
<link rel="stylesheet" href="path/to/style.menu.dark.css">
```

Use Open Sans fotns.

```css
font-family: 'Open Sans', sans-serif;
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

								<!-- multilevel -->
								<li class="parent">
									<a href="#" class="employ">Click</a>
									<ul class="submenu">
										<li><a href="#">One</a></li>
										<li><a href="#">Two</a></li>
									</ul>
								</li>
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
<script src="path/to/responsive.menu.js"></script>
<script>
	$(function() {
		var ps = new PerfectScrollbar('.scrollbar');
	});
</script>
```

Enjoy responsive menu.
