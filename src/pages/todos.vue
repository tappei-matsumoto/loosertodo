<template>
  <q-infinite-scroll @load="onLoad" :offset="250">
    <div v-for="(item, index) in this.$store.state.todos.items" :key="index" class="caption">
      <q-slide-item @left="onLeft(index)" @right="onRight" ref="todo" left-color="green" right-color="orange">
        <template v-slot:left>
          {{index}}
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
  methods: {
    onLoad (index, done) {
      setTimeout(() => {
        this.$store.commit('todos/addDemoData')
        done()
      }, 2000)
    },

    onLeft (index) {
      this.$store.commit('todos/remove', index)
      this.$q.notify({
        message: 'Todoを完了にしました。',
        actions: [{ label: 'Undo', color: 'yellow', handler: () => { /* ... */ } }]
      })
    },

    onRight ({ reset }) {
      this.$q.notify('Right action triggered. Resetting in 1 second.')
    }
  }
}
</script>
