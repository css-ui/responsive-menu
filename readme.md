## Responsive menu

Simple responsive sidebar menu.

## Requirements

- composer
- [NPM/Bower Dependency Manager for Composer](https://github.com/fxpio/composer-asset-plugin)

## Installation

```
composer install
```

## Quick start

CSS dependencies.

```html
<link rel="stylesheet" href="path/to/normalize.css">
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

Navigation wrapper.

```html
<div class="nav"></div>
```

Click show/hide menu for responsive display.

```html
<div class="nav">
	<div class="click"></div>
</div>
```

For title and responsive menu add the sidebar.

```html
<div class="nav">
	<div class="click"></div>
	<div class="sidebar"></div>
</div>
```

Title in sidebar.

```html
<div class="nav">
	<div class="click"></div>
	<div class="sidebar">
		<div class="title">
			<p>Title in sidebar</p>
		</div>
	</div>
</div>
```

Title and add responsive wrapper.

```html
<div class="nav">
	<div class="click"></div>
	<div class="sidebar">
		<div class="title">
			<p>Title in sidebar</p>
		</div>
		<div class="responsive"></div>
	</div>
</div>
```

Title, responsive wrapper add menu.

```html
<div class="nav">
	<div class="click"></div>
	<div class="sidebar">
		<div class="title">
			<p>Title in sidebar</p>
		</div>
		<div class="responsive">
			<ul class="menu scrollbar"></ul>
		</div>
	</div>
</div>
```

Simple menu.

```html
<div class="nav">
	<div class="click"></div>
	<div class="sidebar">
		<div class="title">
			<p>Title in sidebar</p>
		</div>
		<div class="responsive">
			<ul class="menu scrollbar">
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
```

Dropdown menu.

```html
<div class="nav">
	<div class="click"></div>
	<div class="sidebar">
		<div class="title">
			<p>Title in sidebar</p>
		</div>
		<div class="responsive">
			<ul class="menu scrollbar">
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
```
