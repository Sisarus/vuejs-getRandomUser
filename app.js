const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods:{
      async getUser(){
        const res = await fetch('https://randomuser.me/api')
        const {results} = await res.json()

        console.log(results)
        
        this.firstName = results[0].name.firs
        this.lastName = results[0].name.last
        this.email = results[0].email
        this.gender = results[0].gender
        this.picture = results[0].picture.large
      },
    },
})


app.mount('#app')

const Counter = {
    data() {
      return {
        counter: 0
      }
    },
    mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
    }
  }

  Vue.createApp(Counter).mount('#counter')

  const AttributeBinding = {
    data() {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    }
  }
  
  Vue.createApp(AttributeBinding).mount('#bind-attribute')

  const EventHandlingApp = {
    data() {
      return {
        message: 'Hello Vue.js!'
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message
          .split('')
          .reverse()
          .join('')
      }
    }
  }
  
  Vue.createApp(EventHandlingApp).mount('#event-handling')

const TwoWayBinding = {
    data() {
        return {
            message: 'Hello Vue'
        }
    }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')

const ConditionalRendering = {
    data () {
        return {
            seen: true //tulee myös false eli epätosi
        }
    }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

const ListRendering = {
    data(){
        return {
            todos: [
                {text: 'Learn JavaSript'},
                {text: 'Learnt Vue'},
                {text: 'Build something awesome'}
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')

const TodoList = {
    data(){
        return {
            groceryList: [
                {id:0, text: 'Vegetables'},
                {id:1, text: 'Cheese'},
                {id:2, text: 'Whatever else humans are supposed to eat'}
            ]
        }
    }
}

const app1 = Vue.createApp(TodoList)

app1.component('todo-item',{
    props: ['todo'],
    template: `<li>{{todo.text}}</li>`
})

app1.mount('#todo-list-app')