<template>
    <div class="filterComponent">
        <h4>Filter</h4>
        <div class="filterUnit">
            <input :id="0" type="radio" name="r" @input="filterPicked('all')" :value="0" checked>
            <label :for="0">All</label>
        </div>
        <div v-for="(filter, index) in filters" class="filterUnit" :key="filter">
            <input :id="index+1" type="radio" @input="filterPicked(filter)" name="r" :value="index">
            <label :for="index+1">{{filter}}</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Filters',
        props: ['filters'],
        methods: {
            filterPicked(filter) {
                this.$store.commit('CHANGE_FILTER', filter)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .filterComponent {
        margin-bottom: 30px;
        font-family: 'Saira', sans-serif;
        text-align: left;
        h4 {
            margin: 15px 0px 0px 0px;
        }
    }
    /* CSS FOR NEDEN STJÅLET FRA CODEPEN */
    .filterUnit {
        --background: #ffffff;
        --text: #414856;
        --radio: #7C96B2;
        --radio-checked: #4F29F0;
        --radio-size: 20px;
        --width: 100px;
        --border-radius: 10px;
        background: var(--background);
        width: var(--width);
        height: var(--height);
        border-radius: var(--border-radius);
        color: var(--text);
        position: relative;
        box-shadow: 0 10px 30px rgb(65 72 86 / 5%);
        display: grid;
        grid-template-columns: auto var(--radio-size);
        align-items: center;
        margin: 9px 9px 9px 0px;
        justify-content: start;
    }
    label {
        cursor: pointer;
        text-transform: capitalize;
    }
    input[type="radio"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        height: var(--radio-size);
        width: var(--radio-size);
        outline: none;
        margin: 0 7px 0px 0;
        cursor: pointer;
        border: 2px solid var(--radio);
        background: transparent;
        border-radius: 50%;
        display: grid;
        justify-self: end;
        justify-items: center;
        align-items: center;
        overflow: hidden;
        transition: border .5s ease;
        &::before,
        &::after {
            content: "";
            display: flex;
            justify-self: center;
            border-radius: 50%;
        }
        &::before {
            position: absolute;
            width: 100%;
            height: 100%;
            background: var(--background);
            z-index: 1;
            opacity: var(--opacity, 1);
        }
        &::after {
            position: relative;
            width: calc(100% /2);
            height: calc(100% /2);
            background: var(--radio-checked);
            top: var(--y, 100%);
            transition: top .5s cubic-bezier(0.48, 1.97, 0.5, 0.63);
        }
        &:checked {
            --radio: var(--radio-checked);
            &::after {
                --y: 0%;
                animation: stretch-animate .3s ease-out .17s;
            }
            &::before {
                --opacity: 0;
            }
            ~input[type="radio"] {
                &::after {
                    --y: -100%;
                }
            }
        }
        &:not(:checked) {
            &::before {
                --opacity: 1;
                transition: opacity 0s linear .5s;
            }
        }
    }
    @keyframes stretch-animate {
        0% {
            transform: scale(1, 1)
        }
        28% {
            transform: scale(1.15, .85)
        }
        50% {
            transform: scale(.9, 1.1)
        }
        100% {
            transform: scale(1, 1)
        }
    }
</style>