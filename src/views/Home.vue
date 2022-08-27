<template>

    <div>
        <!-- Home entry box container -->
        <div class="container">

            <div class="left">
                <!-- agency icon and name -->
                <div class="agency-intro flex fx-cl">
                    <div class="icon">
                        <img width="100%" src="../global/ic-144.png">
                    </div>
                    <h1>Glaxio UI</h1>
                </div>

                <!-- agency intro -->
                <div class="agency-info">
                    <h1>Welcome to Glaxio UI Agency</h1>
                    <h4>
                        This is a web based front end agency. <br> Let`s build your personal project & your company
                        interface for .
                    </h4>
                </div>
            </div>

            <!-- Glaxy -->
            <Glaxy />

        </div>
    </div>

</template>

<script setup>

import Glaxy from "../components/glaxy.vue";

</script>

<style scoped>
.agency-info {
    color: #fff;
}
</style>