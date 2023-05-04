<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1280 1024"
    style="enable-background: new 0 0 1280 1024"
    xml:space="preserve"
  >
    <g id="Layer_1">
      <g id="Layer_1_00000178892790174784637900000011226435819909219249_">
        <path
          class="st0"
          d="M990,545.6H315c-55,0-100-45-100-100v-251c0-55,45-100,100-100h675c55,0,100,45,100,100v251
			C1090,500.6,1045,545.6,990,545.6z"
        />
        <path
          class="st0"
          d="M276.5,537.6L276.5,537.6c0.8,0,1.5-0.7,1.5-1.5v-433c0-0.8-0.7-1.5-1.5-1.5l0,0c-0.8,0-1.5,0.7-1.5,1.5v433
			C275,536.9,275.7,537.6,276.5,537.6z"
        />
        <path
          class="st0"
          d="M1003,544.6L1003,544.6c-0.6,0-1-0.5-1-1v-448c0-0.5,0.4-1,1-1l0,0c0.6,0,1,0.5,1,1v448
			C1004,544.1,1003.6,544.6,1003,544.6z"
        />
        <path
          class="st1"
          d="M643,545.6L643,545.6c1.7,0,3-1.3,3-3v-445c0-1.6-1.3-3-3-3l0,0c-1.7,0-3,1.4-3,3v445
			C640,544.3,641.3,545.6,643,545.6z"
        />
        <path
          class="st2"
          d="M735,544.6L735,544.6c1.1,0,2-0.9,2-2v-446c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v446
			C733,543.7,733.9,544.6,735,544.6z"
        />
        <path
          class="st2"
          d="M539,545.6L539,545.6c-1.1,0-2-0.9-2-2v-446c0-1.1,0.9-2,2-2l0,0c1.1,0,2,0.9,2,2v446
			C541,544.7,540.1,545.6,539,545.6z"
        />
        <path
          class="st3"
          d="M643,366.6L643,366.6c-28.6,0-52-23.4-52-52v-6c0-28.6,23.4-52,52-52l0,0c28.6,0,52,23.4,52,52v6
			C695,343.2,671.6,366.6,643,366.6z"
        />
      </g>
    </g>
    <g id="Layer_2">
      <g @click="handleClick">
        <circle
          class="cls-8"
          cx="615"
          cy="410"
          r="20"
          id="rightWing"
          :class="{
            'position-color-circles': positions[3].color == null,
            red: positions[3].color == 'red',
            green: positions[3].color == 'green',
            grey: positions[3].color == 'grey',
            hidden: positions[3].circleHidden,
          }"
        />
      </g>
      <g @click="handleClick">
        <circle
          class="cls-8"
          cx="615"
          cy="205"
          r="20"
          id="leftWing"
          :class="{
            'position-color-circles': positions[5].color == null,
            red: positions[5].color == 'red',
            green: positions[5].color == 'green',
            grey: positions[5].color == 'grey',
            hidden: positions[5].circleHidden,
          }"
        />
      </g>

      <g @click="handleClick">
        <circle
          class="cls-8"
          cx="475"
          cy="235"
          r="20"
          id="leftDefense"
          :class="{
            'position-color-circles': positions[1].color == null,
            red: positions[1].color == 'red',
            green: positions[1].color == 'green',
            grey: positions[1].color == 'grey',
            hidden: positions[1].circleHidden,
          }"
        />
      </g>

      <g @click="handleClick">
        <circle
          class="cls-8"
          cx="475"
          cy="350"
          r="20"
          id="rightDefense"
          :class="{
            'position-color-circles': positions[2].color == null,
            red: positions[2].color == 'red',
            green: positions[2].color == 'green',
            grey: positions[2].color == 'grey',
            hidden: positions[2].circleHidden,
          }"
        />
      </g>

      <g @click="handleClick">
        <circle
          class="cls-8"
          cx="310"
          cy="300"
          r="20"
          id="goalie"
          :class="{
            'position-color-circles': positions[0].color == null,
            red: positions[0].color == 'red',
            green: positions[0].color == 'green',
            grey: positions[0].color == 'grey',
            hidden: positions[0].circleHidden,
          }"
        />
      </g>

      <g @click="handleClick">
        <circle
          class="cls-8"
          cx="615"
          cy="300"
          r="20"
          id="center"
          :class="{
            'position-color-circles': positions[4].color == null,
            red: positions[4].color == 'red',
            green: positions[4].color == 'green',
            grey: positions[4].color == 'grey',
            hidden: positions[4].circleHidden,
          }"
        />
      </g>
    </g>
    <g>
      <text
        transform="translate(335.09 75.99)"
        :class="{ hidden: !positions[0].showText }"
      >
        <tspan class="cls-10">
          <tspan x="-45" y="260">Goalie</tspan>
        </tspan>
      </text>

      <text
        transform="translate(335.09 75.99)"
        :class="{ hidden: !positions[1].showText }"
      >
        <tspan class="cls-10">
          <tspan x="100" y="200">Left Defense</tspan>
        </tspan>
      </text>

      <text
        transform="translate(335.09 75.99)"
        :class="{ hidden: !positions[2].showText }"
      >
        <tspan class="cls-10">
          <tspan x="95" y="315">Right Defense</tspan>
        </tspan>
      </text>

      <text
        transform="translate(335.09 75.99)"
        :class="{ hidden: !positions[5].showText }"
      >
        <tspan class="cls-10">
          <tspan x="250" y="165">Left Wing</tspan>
        </tspan>
      </text>

      <text
        transform="translate(335.09 75.99)"
        :class="{ hidden: !positions[4].showText }"
      >
        <tspan class="cls-10">
          <tspan x="260" y="260">Center</tspan>
        </tspan>
      </text>

      <text
        transform="translate(335.09 75.99)"
        :class="{ hidden: !positions[3].showText }"
      >
        <tspan class="cls-10">
          <tspan x="250" y="370">Right Wing</tspan>
        </tspan>
      </text>
    </g>
  </svg>
</template>

<script>
export default {
  name: "IceRink",
  props: {
    positions: Array,
  },
  data() {
    return {};
  },
  methods: {
    handleClick(event) {
      if (event && event.target && event.target.id) {
        const clickedPosition = event.target.id;
        this.$emit("clickedPosition", clickedPosition);
      }
    },
  },
};
</script>

<style scoped>
.st0 {
  fill: #ffffff;
  stroke: #000000;
  stroke-width: 4;
  stroke-miterlimit: 10;
}
.st1 {
  fill: #eb0009;
  stroke: #f40000;
  stroke-width: 4;
  stroke-miterlimit: 10;
}
.st2 {
  fill: #000e73;
  stroke: #1600ff;
  stroke-width: 4;
  stroke-miterlimit: 10;
}
.st3 {
  fill: #fff3ff;
  stroke: #ff0009;
  stroke-width: 4;
  stroke-miterlimit: 10;
}
.st4 {
  fill: #40ff00;
  stroke: #00ff24;
  stroke-width: 4;
  stroke-miterlimit: 10;
}
.st5 {
  fill: none;
  stroke: #00ff24;
  stroke-width: 4;
  stroke-miterlimit: 10;
}

.position-name {
  color: #000000;
  font-size: 18px;
  font-family: OpenSans-Bold, Open Sans;
  font-weight: 700;
}
.red {
  fill: red;
}
.green {
  fill: green;
}
.hidden {
  display: none;
}
.grey {
  fill: grey;
}
.position-color-circles {
  fill: #afcbea;
}
</style>
