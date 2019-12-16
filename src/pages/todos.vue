<template>
  <q-infinite-scroll @load="onLoad" :offset="250">
    <div v-for="(item, index) in items" :key="index" class="caption">
      <q-slide-item @left="onLeft" @right="onRight" ref="todo" left-color="green" right-color="orange">
        <template v-slot:left>
          <q-item @click="click(index)" clickable v-ripple>
            <q-icon left size="3em" name="done" />
            <div>Done</div>
            <q-icon left size="3em" name="undo" />
          </q-item>
        </template>
        <template v-slot:right>
          <div class="row items-center">
            Right content.. long <q-icon right name="alarm" />
          </div>
        </template>
        <q-item clickable v-ripple>
          <q-item-section avatar top>
            <q-avatar icon="folder" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1">Photos</q-item-label>
            <q-item-label caption>February 22nd, 2019</q-item-label>
          </q-item-section>
        </q-item>
      </q-slide-item>
    </div>
    <template v-slot:loading>
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </template>
  </q-infinite-scroll>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      items: [{ uuid: this.index++ }, { uuid: this.index++ }, { uuid: this.index++ }, { uuid: this.index++ }, { uuid: this.index++ }, { uuid: this.index++ }, { uuid: this.index++ }]
    }
  },

  methods: {
    onLoad (index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({ uuid: this.index++ }, { uuid: this.index++ }, { uuid: this.index++ }, { uuid: this.index++ }, { uuid: this.index++ }, { uuid: this.index++ }, { uuid: this.index++ })
          done()
        }
      }, 2000)
    },

    onLeft ({ reset }) {
      this.$q.notify('Todoを完了にしました。')
    },

    onRight ({ reset }) {
      this.$q.notify('Right action triggered. Resetting in 1 second.')
    },

    click (index) {
      this.$refs.todo[index].reset()
    }
  }
}
</script>
