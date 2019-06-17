<template>
  <section class="build-page-content-mobile">
    <div class="build-page-content-mobile-gender">
      <p class="build-page-content-mobile-text">GENDER</p>
      <a @click="femaleOrMale = 'm'" class="build-page-content-mobile-symbol">&#9794;</a>
      <a @click="femaleOrMale = 'f'" class="build-page-content-mobile-symbol">&#9792;</a>
    </div>
    <div class="build-page-content-mobile-content">
      <div class="build-page-content-mobile-content-size">
        <p class="build-page-content-mobile-content-size-text">BODY</p>
        <img
          @click="bodySizePicker(4)"
          class="build-page-content-mobile-content-size-body"
          src="@/assets/img/body4.png"
        >
        <img
          @click="bodySizePicker(3)"
          class="build-page-content-mobile-content-size-body"
          src="@/assets/img/body3.png"
        >
        <img
          @click="bodySizePicker(2)"
          class="build-page-content-mobile-content-size-body"
          src="@/assets/img/body2.png"
        >
        <img
          @click="bodySizePicker(1)"
          class="build-page-content-mobile-content-size-body"
          src="@/assets/img/body1.png"
        >
      </div>
      <div class="build-page-content-mobile-content-body">
          <div v-show="femaleOrMale == 'm'" class="build-page-content-mobile-content-body-img-seperator">
          <a class="build-page-content-mobile-content-body-selector" @click="hBackForward = 1, headImgScroller()">&#60;</a>
          <img v-show="hImgNumber == 1" class="build-page-content-mobile-content-body-img head" :style="{width: hWidth, height: headHeight}" src="../assets/img/h1.png">
          <img
            v-show="hImgNumber == 2"
            class="build-page-content-mobile-content-body-img head"
            :style="{width: hWidth, height: headHeight}"
            src="../assets/img/h2.png"
          >
          <img
            v-show="hImgNumber == 3"
            class="build-page-content-mobile-content-body-img head"
            :style="{width: hWidth, height: headHeight}"
            src="../assets/img/h3.png"
          >
          <a
            class="build-page-content-mobile-content-body-selector"
            @click="hBackForward = 2, headImgScroller()"
          >&#10095;</a>
        </div>

        <div v-show="femaleOrMale == 'm'" class="build-page-content-mobile-content-body-img-seperator">
          <a
            class="build-page-content-mobile-content-body-selector"
            @click="bBackForward = 1, bodyImgScroller()"
          >&#10094;</a>
          <img
            v-show="bImgNumber == 1"
            class="build-page-content-mobile-content-body-img body"
            :style="{width: width, height: bodyHeight}"
            src="../assets/img/b1.png"
            alt
          >
          <img
            v-show="bImgNumber == 2"
            class="build-page-content-mobile-content-body-img body"
            :style="{width: width, height: bodyHeight}"
            src="../assets/img/b2.png"
            alt
          >
          <img
            v-show="bImgNumber == 3"
            class="build-page-content-mobile-content-body-img body"
            :style="{width: width, height: bodyHeight}"
            src="../assets/img/b3.png"
            alt
          >
          <a
            class="build-page-content-mobile-content-body-selector"
            @click="bBackForward = 2, bodyImgScroller()"
          >&#10095;</a>
        </div>

        <div v-show="femaleOrMale == 'm'" class="build-page-content-mobile-content-body-img-seperator leg">
          <a
            class="build-page-content-mobile-content-body-selector"
            @click="lBackForward = 1, legImgScroller()"
          >&#10094;</a>
          <img
            v-show="lImgNumber == 1"
            class="build-page-content-mobile-content-body-img"
            :style="{width: width, height: legHeight}"
            src="../assets/img/l1.png"
            alt
          >
          <img
            v-show="lImgNumber == 2"
            class="build-page-content-mobile-content-body-img"
            :style="{width: width, height: legHeight}"
            src="../assets/img/l2.png"
            alt
          >
          <img
            v-show="lImgNumber == 3"
            class="build-page-content-mobile-content-body-img"
            :style="{width: width, height: legHeight}"
            src="../assets/img/l3.png"
            alt
          >
          <a
            class="build-page-content-mobile-content-body-selector"
            @click="lBackForward = 2, legImgScroller()"
          >&#10095;</a>
        </div>

        <div v-show="femaleOrMale == 'f'" class="build-page-content-mobile-content-body-img-seperator">
          <a
            class="build-page-content-mobile-content-body-selector right"
            @click="hBackForward = 1, headImgScroller()"
          >&#10094;</a>
          <img
            v-show="hImgNumber == 1"
            class="build-page-content-mobile-content-body-img head"
            :style="{width: hWidth, height: headHeight}"
            src="../assets/img/fh1.png"
            alt
          >
          <img
            v-show="hImgNumber == 2"
            class="build-page-content-mobile-content-body-img head"
            :style="{width: hWidth, height: headHeight}"
            src="../assets/img/fh2.png"
            alt
          >
          <img
            v-show="hImgNumber == 3"
            class="build-page-content-mobile-content-body-img head"
            :style="{width: hWidth, height: headHeight}"
            src="../assets/img/fh3.png"
            alt
          >
          <a
            class="build-page-content-mobile-content-body-selector right"
            @click="hBackForward = 2, headImgScroller()"
          >&#10095;</a>
        </div>

        <div v-show="femaleOrMale == 'f'" class="build-page-content-mobile-content-body-img-seperator">
          <a
            class="build-page-content-mobile-content-body-selector left"
            @click="bBackForward = 1, bodyImgScroller()"
          >&#10094;</a>
          <img
            v-show="bImgNumber == 1"
            class="build-page-content-mobile-content-body-img body"
            :style="{width: width, height: bodyHeight}"
            src="../assets/img/fb1.png"
            alt
          >
          <img
            v-show="bImgNumber == 2"
            class="build-page-content-mobile-content-body-img body"
            :style="{width: width, height: bodyHeight}"
            src="../assets/img/fb2.png"
            alt
          >
          <img
            v-show="bImgNumber == 3"
            class="build-page-content-mobile-content-body-img body"
            :style="{width: width, height: bodyHeight}"
            src="../assets/img/fb3.png"
            alt
          >
          <a
            class="build-page-content-mobile-content-body-selector right"
            @click="bBackForward = 2, bodyImgScroller()"
          >&#10095;</a>
        </div>

        <div v-show="femaleOrMale == 'f'" class="build-page-content-mobile-content-body-img-seperator leg">
          <a
            class="build-page-content-mobile-content-body-selector left"
            @click="lBackForward = 1, legImgScroller()"
          >&#10094;</a>
          <img
            v-show="lImgNumber == 1"
            class="build-page-content-mobile-content-body-img"
            :style="{width: width, height: legHeight}"
            src="../assets/img/fl1.png"
            alt
          >
          <img
            v-show="lImgNumber == 2"
            class="build-page-content-mobile-content-body-img"
            :style="{width: width, height: legHeight}"
            src="../assets/img/fl2.png"
            alt
          >
          <img
            v-show="lImgNumber == 3"
            class="build-page-content-mobile-content-body-img"
            :style="{width: width, height: legHeight}"
            src="../assets/img/fl3.png"
            alt
          >
          <a
            class="build-page-content-mobile-content-body-selector right"
            @click="lBackForward = 2, legImgScroller()"
          >&#10095;</a>
        </div>
      </div>
      <div class="build-page-content-mobile-content-length">
          <p class="content-length-text">LENGTH</p>
          <div class="build-page-content-mobile-content-length-slidecontainer">
          <input @click.native="bodyHeightPicker()" type="range" min="150" max="220" value="180" class="slider" id="myRange" v-model="lengthNumber">
          <p>
            <span id="length-text">{{lengthNumber}}</span> cm
          </p>
        </div>
      </div>
    </div>
    <div class="build-page-content-mobile-button">
        <a @click="bodyChosen()" class="btn">
        <router-link to="/power">
          Step two
          <span>&gt;</span>
        </router-link>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      femaleOrMale: "f",
      hImgNumber: 1,
      bImgNumber: 1,
      lImgNumber: 1,
      hBackForward: 1,
      bBackForward: 1,
      lBackForward: 1,
      imgUrl: "../assets/img/b.png",
      lengthNumber: 180,
      width: 13 + "rem",
      hWidth: 13 + "rem",
      contentOneMargin: 0,
      headHeight: 3 + "rem",
      bodyHeight: 5 + "rem",
      legHeight: 8 + "rem",
    };
  },

  methods: {
      headImgScroller() {
      if (this.hBackForward == 1) {
        if (this.hImgNumber == 3) {
          this.hImgNumber = 1;
        } else {
          this.hImgNumber++;
        }
      } else {
        if (this.hImgNumber == 1) {
          this.hImgNumber = 3;
        } else {
          this.hImgNumber--;
        }
      }
      this.$store.commit("setHeadNumber", this.hImgNumber);
    },

    bodyImgScroller() {
      if (this.bBackForward == 1) {
        if (this.bImgNumber == 3) {
          this.bImgNumber = 1;
        } else {
          this.bImgNumber++;
        }
      } else {
        if (this.bImgNumber == 1) {
          this.bImgNumber = 3;
        } else {
          this.bImgNumber--;
        }
      }

      this.$store.commit("setBodyNumber", this.bImgNumber);
    },

    legImgScroller() {
      if (this.lBackForward == 1) {
        if (this.lImgNumber == 3) {
          this.lImgNumber = 1;
        } else {
          this.lImgNumber++;
        }
      } else {
        if (this.lImgNumber == 1) {
          this.lImgNumber = 3;
        } else {
          this.lImgNumber--;
        }
      }
      this.$store.commit("setLegNumber", this.lImgNumber);
    },

    bodyChosen() {
      this.$store.commit("setFemaleOrMale", this.femaleOrMale);
      this.$store.commit("setHeadNumber", this.hImgNumber);
      this.$store.commit("setBodyNumber", this.bImgNumber);
      this.$store.commit("setLegNumber", this.lImgNumber);
    },

    bodySizePicker(size) {
      if (size == 4) {
        this.hWidth = 12 + "rem";
        this.width = 12 + "rem";
        this.contentOneMargin = 1 + "rem";
      } else if (size == 3) {
        this.contentOneMargin = 0;
        this.hWidth = 13 + "rem";
        this.width = 13 + "rem";
      } else if (size == 2) {
        this.contentOneMargin = -1 + "rem";
        this.hWidth = 13 + "rem";
        this.width = 14 + "rem";
      } else if (size == 1) {
        this.contentOneMargin = -2 + "rem";
        this.hWidth = 14 + "rem";
        this.width = 15 + "rem";
      }
    },
    bodyHeightPicker() {
        console.log("fghj");
      if (this.lengthNumber >= 150 && this.lengthNumber < 155) {
        this.headHeight = 2.6 + "rem";
        this.bodyHeight = 3.6 + "rem";
        this.legHeight = 6.6 + "rem";
      } else if (this.lengthNumber >= 155 && this.lengthNumber < 160) {
        this.headHeight = 2.7 + "rem";
        this.bodyHeight = 3.8 + "rem";
        this.legHeight = 6.8 + "rem";
      } else if (this.lengthNumber >= 160 && this.lengthNumber < 165) {
        this.headHeight = 2.7 + "rem";
        this.bodyHeight = 4 + "rem";
        this.legHeight = 7 + "rem";
      } else if (this.lengthNumber >= 165 && this.lengthNumber < 170) {
        this.headHeight = 2.8 + "rem";
        this.bodyHeight = 4.2 + "rem";
        this.legHeight = 7.2 + "rem";
      } else if (this.lengthNumber >= 170 && this.lengthNumber < 175) {
        this.headHeight = 2.8 + "rem";
        this.bodyHeight = 4.4 + "rem";
        this.legHeight = 7.4 + "rem";
      } else if (this.lengthNumber >= 170 && this.lengthNumber < 175) {
        this.headHeight = 2.9 + "rem";
        this.bodyHeight = 4.6 + "rem";
        this.legHeight = 7.6 + "rem";
      } else if (this.lengthNumber >= 175 && this.lengthNumber < 180) {
        this.headHeight = 2.9 + "rem";
        this.bodyHeight = 4.8 + "rem";
        this.legHeight = 7.8 + "rem";
      } else if (this.lengthNumber >= 180 && this.lengthNumber < 185) {
        this.headHeight = 3 + "rem";
        this.bodyHeight = 5 + "rem";
        this.legHeight = 8 + "rem";
      } else if (this.lengthNumber >= 185 && this.lengthNumber < 190) {
        this.headHeight = 3 + "rem";
        this.bodyHeight = 5.2 + "rem";
        this.legHeight = 8.2 + "rem";
      } else if (this.lengthNumber >= 190 && this.lengthNumber < 195) {
        this.headHeight = 3.1 + "rem";
        this.bodyHeight = 5.4 + "rem";
        this.legHeight = 8.4 + "rem";
      } else if (this.lengthNumber >= 195 && this.lengthNumber < 200) {
        this.headHeight = 3.1 + "rem";
        this.bodyHeight = 5.6 + "rem";
        this.legHeight = 8.6 + "rem";
      } else if (this.lengthNumber >= 200 && this.lengthNumber < 205) {
        this.headHeight = 3.2 + "rem";
        this.bodyHeight = 5.8 + "rem";
        this.legHeight = 8.8 + "rem";
      } else if (this.lengthNumber >= 205 && this.lengthNumber < 210) {
        this.headHeight = 3.2 + "rem";
        this.bodyHeight = 6 + "rem";
        this.legHeight = 9 + "rem";
      } else if (this.lengthNumber >= 210 && this.lengthNumber < 215) {
        this.headHeight = 3.3 + "rem";
        this.bodyHeight = 6.2 + "rem";
        this.legHeight = 9.2 + "rem";
      } else if (this.lengthNumber >= 215 && this.lengthNumber <= 220) {
        this.headHeight = 3.3 + "rem";
        this.bodyHeight = 6.4 + "rem";
        this.legHeight = 9.4 + "rem";
      }
    },
  }
};
</script>