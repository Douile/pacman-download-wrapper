# Maintainer: Douile <youremail@domain.com>
pkgname=pacman-download-wrapper
pkgver=0.1
pkgrel=1
pkgdesc="Wrap pacman XferCommand to download http/https/ftp with aria2 and everything else with curl"
arch=(any)
url="https://github.com/Douile/pacman-download-wrapper.git"
license=('MIT')
depends=(curl aria2)
makedepends=(deno)
source=("git+$url")
noextract=()
md5sums=('SKIP') #generate with 'makepkg -g'

build() {
  cd pacman-download-wrapper
  deno build --allow-net pacman-download-wrapper.ts
}

package() {
  mkdir -p ${pkgdir}/usr/bin
  install -Dm555 ./pacman-download-wrapper "${pkgdir}/usr/bin/pacman-download-wrapper"
}
