Game
=====

This is a video game project I started but never finished (less than 1%).

It has very light foundations for using [phaser](http://phaser.io/) (in a style of my choosing).
It may not be the best way to use phaser, but I figured I'd open source it and
maybe someone can make use of it.  Not actual gameplay components have been implemented.

It consist of an asset loader, a start screen, and a 3d menu select screen. The
3d menu screen utilizes [threejs](http://threejs.org/) which is not part of phaser.

It can be run using any http server, I prefer python's simple http server for development:
```bash
python -m SimpleHTTPServer 8000
```