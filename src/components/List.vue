<template>
    <div class="list">
        <div class="listing" v-if="currentFilter == listing.platform || currentFilter == 'all'" v-for="listing in list" :key="listing.platform">
            <div class="wrapper">
                <div class="header">
                    <h5>{{listing.platform}}</h5>
                    <p class="title">{{listing.title}}</p>
                </div>
                <div class="data">
                    <div class="statContainer">
                        <p class="statHeader"><i class="far fa-heart-square"></i> Likes</p>
                        <p class="stats likes">{{listing.stats.likes}}</p>
                    </div>
                    <div class="statContainer">
                        <p class="statHeader"><i class="far fa-comments"></i> Comments</p>
                        <p class="stats comments">{{listing.stats.comments}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list',
        props: ['list'],
        data() {
            return {
                currentFilter: null,
            }
        },
        mounted() {
            this.currentFilter = this.$store.state.currentFilter;
            this.$store.subscribe((mutation, state) => {
                switch (mutation.type) {
                    case 'CHANGE_FILTER':
                        this.currentFilter = mutation.payload
                        break;
                }
            })
        },
    }
</script>

<style lang="scss" scoped>
    .listing {
        font-family: 'Saira', sans-serif;
        .wrapper {
            box-shadow: 0px 0px 9px 0px #0000008a;
            border-radius: 7px;
            padding: 20px;
            margin-bottom: 20px;
            background: white;
            text-align: left;
            h5 {
                text-transform: capitalize;
                margin: 0;
                font-size: 1.2em;
                line-height: 0.9em;
            }
            p {
                margin: 0;
            }
            .title {
                font-size: 0.9em;
                color: gray;
                margin-bottom: 15px;
            }
            .statContainer {
                margin-bottom: 20px;
                display: inline-block;
                width: 50%;
                .statHeader {
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                .stats {
                    font-family: "Share Tech Mono", monospace;
                    font-weight: bold;
                    font-size: 1.8em;
                    padding-left: 27px;
                }
                .far {
                    font-size: 1.3em;
                    min-width: 23px;
                }
                .fa-heart-square {
                    color: #eb5858;
                }
                .fa-comments {
                    color: #4a90cb;
                }
            }
        }
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
</style>