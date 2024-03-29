---
layout: page
title: Embedded Linux Image Builder
description: Build an embedded Linux image from scratch with Docker.
img: assets/img/portfolio/embedded.png
importance: 1
category: Embedded Software Development
github: https://github.com/masoudr/embedded-linux-image-builder
---

Embedded Linux systems are so common these days, and they can be found in set-top boxes, smart TVs, network devices (like routers, 3G/4G USB modems), etc. For the developers, a major concern with these systems is creating their own custom Linux distribution based on their needs, including creating the image for the development or the final product. Making the image usually consists of compiling the Linux kernel, device tree binaries, compiling Bootloader, and customizing the Linux file system. These steps may become frustrating if you want to test something or try to rebuild the image over and over. On the other side, creating the environment for cross-compiling is a little complicated as you need to set a special environment for the ARM toolchain.

There are many automated tools to achieve this, like [Buildroot](https://buildroot.org/) and [Yocto Project](https://www.yoctoproject.org/). They usually give you a minimal version of the Linux image and are a good choice for the final image that is intended to use in the production environment, but for the development environment, they are not always the best choice because of lacking package manager or external tools.
Another choice is to create your own custom Linux image by compiling the kernel, Bootloader, and file system, and finally bring them all together and put it into the device's SD card or flash storage. With the [Docker](https://www.docker.com/), you can do this simply and don't need to mess around with your host. Moreover, you can use the setup on Mac or Windows machines.

I created a simple Docker project to achieve this. It can be customized to use with any embedded Linux board and can be developed easily. I've tested it with [BeagleBone Black](https://beagleboard.org/black), but with a little change can be used on other educational development boards like [Raspberry Pi](https://www.raspberrypi.org/), [Nano Pi](http://nanopi.io/), etc. You can also use it on your own customized embedded Linux board, but you need to provide your configuration file for the kernel or Bootloader.
All you need to do is to provide the resource binaries for the Linux kernel, Bootloader, and filesystem, then start the build with a single command `docker-compose up`. The output is a standard image file that can be written on the SD card easily. Also, it uses the Linaro toolchain for cross-compilation, so it is fast and reliable.

Although the project use is relatively straightforward, I've made a step-by-step guide. So let's go into details and how to set it up.

For using this project, you don't need to set up any special environment or meet any special requirements.
I've used BeagleBone Black as the target system with Ubuntu 18.04 and Ti's Linux Kernel 4.19.94.

## Features

* Based on Docker so can be run on any machine without any requirements.
* Build Kernel, DTS, modules, and headers from the source.
* Build Bootloader (u-boot) from the source.
* Can be combined with any Linux distribution.
* Create image file (.img) as output file for easy writing to SD card.
* High-speed build with the help of using Linaro toolchain and Docker engine.
* Can be used with any Embedded Linux system with little configuration change.

## Requirements

* [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/)
* If you are using Windows, make sure to use the latest [WSL 2](https://docs.docker.com/docker-for-windows/wsl/) backend as the device-mapper kernel driver is missing in older WSL versions. Otherwise, you need to build the SD Card manually.
* Download resource files and put them in the `resources` directory:
  * Linaro cross-compile toolchain.
    * You can get the binaries from [here](https://www.linaro.org/downloads/).
  * Linux Kernel source for your board.
    * For BeagleBone Black, you can use the official [kernel](https://github.com/beagleboard/linux)
  * u-boot [source code](https://github.com/u-boot/u-boot).
  * A base rootfs Linux distro.
    * You can grab Ubuntu or Debian distro from [here](https://rcn-ee.com/rootfs/eewiki/minfs/).
    * [Ubuntu 18.04.3](https://rcn-ee.com/rootfs/eewiki/minfs/ubuntu-18.04.3-minimal-armhf-2020-02-10.tar.xz) used in this project.
  * As the compile process may take longer, you need to increase the Docker engine resources.

## How to use

1. Make sure that you meet the requirements and put the necessary files into the `resources` directory:
    * For example:

      ```bash
      project
      └───resources
      │   │   armhf-rootfs-ubuntu-bionic.tar
      │   │   gcc-linaro-7.5.0-2019.12-x86_64_arm-linux-gnueabihf.tar
      │   │   linux-4.19.94-ti-rt-r41.tar.gz
      │   │   u-boot-2020.04-rc3.tar.gz

      ```

2. Make sure to decompress the Linux rootfs to get the right compressed file. The files contain all the Linux rootfs inside its root directory (e.g., `armhf-rootfs-ubuntu-bionic.tar`).
3. Set the Dockerfile parameters in `docker-compose.yml`:
   * `kernel_version`: kernel version in X.Y.Z format
   * `kernel_filename`: kernel source file path
   * `kernel_defconfig`: kernel configuration file
   * `uboot_filename`: u-boot source file path
   * `uboot_defconfig`: u-boot configuration file
   * `rootfs_filename`: Linux Root file system path
   * `linaro_filename`: Linaro toolchain file path

4. Bring up the console and navigate to the project root directory, and execute

   ```bash
   docker-compose up --build
   ```

5. If the process is complete successfully, you should get the image file `sd_image.img` and `rootfs.tar.gz` in the `output` directory.

6. You can write `sd_image.sd` directly to the SD Card or manually partition your SD and copy the contents of `rootfs.tar.gz` into the SD partitions.

## Contribution

Project source code can be found [here](https://github.com/masoudr/embedded-linux-image-builder). Reporting any bugs or suggestions for improvement would be appreciated. 