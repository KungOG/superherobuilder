<template>
  <main class="build">
    <section class="build-page-content-1">
        <div class="build-page-content-1-div">
            <p class="build-page-content-1-text">GENDER </p>
            <a class="build-page-content-1-gender">&#9794;</a>
            <a class="build-page-content-1-gender">&#9792;</a>
        </div>
        <div class="build-page-content-1-div">
            <p class="build-page-content-1-text">LENGTH </p>
        </div>
        <div class="build-page-content-1-div">
            <p class="build-page-content-1-text">BODY </p>
        </div>
        <a class="btn">
            <router-link to="/power">
                Step two
                <span>&gt;</span>
            </router-link>
        </a>
    </section>
    <section class="build-page-content-2">
        <div class="build-page-content-2-img-container">
            <div class="build-page-content-2-img-body-seperator">
                <a class="build-page-content-2-img-selector" @click="hBackForward = 1, headImgScroller()">&#60;</a>
                <img v-show="hImgNumber == 1" class="build-page-content-2-img head" src="../assets/img/h1.png" alt="">
                <img v-show="hImgNumber == 2" class="build-page-content-2-img head" src="../assets/img/h2.png" alt="">
                <img v-show="hImgNumber == 3" class="build-page-content-2-img head" src="../assets/img/h3.png" alt="">
                <a class="build-page-content-2-img-selector" @click="hBackForward = 2, headImgScroller()">&gt;</a>
            </div>

            <div class="build-page-content-2-img-body-seperator">
                <a class="build-page-content-2-img-selector" @click="bBackForward = 1, bodyImgScroller()">&#60;</a>
                <img v-show="bImgNumber == 1" class="build-page-content-2-img body" src="../assets/img/b1.png" alt="">
                <img v-show="bImgNumber == 2" class="build-page-content-2-img body" src="../assets/img/b2.png" alt="">
                <img v-show="bImgNumber == 3" class="build-page-content-2-img body" src="../assets/img/b3.png" alt="">
                <a class="build-page-content-2-img-selector" @click="bBackForward = 2, bodyImgScroller()">&gt;</a>
            </div>

            <div class="build-page-content-2-img-body-seperator">
                <a class="build-page-content-2-img-selector" @click="lBackForward = 1, legImgScroller()">&#60;</a>
                <img v-show="lImgNumber == 1" class="build-page-content-2-img legs" src="../assets/img/l1.png" alt="">
                <img v-show="lImgNumber == 2" class="build-page-content-2-img legs" src="../assets/img/l2.png" alt="">
                <img v-show="lImgNumber == 3" class="build-page-content-2-img legs" src="../assets/img/l3.png" alt="">
                <a class="build-page-content-2-img-selector" @click="lBackForward = 2, legImgScroller()">&gt;</a>
            </div>
            
        </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "builder",

    data() {
        return {
            hImgNumber: 1,
            bImgNumber: 1,
            lImgNumber: 1,
            hBackForward: 1,
            bBackForward: 1,
            lBackForward: 1,
            imgUrl: '../assets/img/b.png'
        }
    },

    methods: {
        headImgScroller() {
            if(this.hBackForward == 1) {
                if(this.hImgNumber == 3) {
                    this.hImgNumber = 1;
                } else {
                    this.hImgNumber++;
                }
            } else {
                if(this.hImgNumber == 1) {
                    this.hImgNumber = 3;
                } else {
                    this.hImgNumber--;
                }
            }
        },

        bodyImgScroller() {
            if(this.bBackForward == 1) {
                if(this.bImgNumber == 3) {
                    this.bImgNumber = 1;
                } else {
                    this.bImgNumber++;
                }
            } else {
                if(this.bImgNumber == 1) {
                    this.bImgNumber = 3;
                } else {
                    this.bImgNumber--;
                }
            }
        },

        legImgScroller() {
            if(this.lBackForward == 1) {
                if(this.lImgNumber == 3) {
                    this.lImgNumber = 1;
                } else {
                    this.lImgNumber++;
                }
            } else {
                if(this.lImgNumber == 1) {
                    this.lImgNumber = 3;
                } else {
                    this.lImgNumber--;
                }
            }
        }
    }

};
</script>
