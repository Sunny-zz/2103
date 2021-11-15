<template>
  <div class="posts">
    <div class='nav'>
      <ul>
        <li :class="{active: postIndex === index }" v-for="(post, index) in posts" :key="post.id" @click="postIndex = index">
          {{post.title}}
        </li>
      </ul>
    </div>
    <div class="post-content">
      <p>{{ showContent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'one',
          content: 'Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around'
        },
        {
          id: 2,
          title: 'two',
          content: 'Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.'
        },
        {
          id: 3,
          title: 'three',
          content: 'Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.'
        }
      ],
      postIndex: -1
    }
  },
  computed: {
    showContent() {
      const { postIndex , posts} = this
      return postIndex === -1 ? 'Click on a blog title to the left to view it.' : posts[postIndex].content 
    }
  },
}


</script>

<style>
.posts{
  display: flex;
  width: 800px;
  border: 1px solid #ccc;
  height: 300px;
}
.posts .nav ul {
  margin: 0;
  width: 100px;
  height: 300px;
  border-right: 1px solid #ccc;
}
.posts .nav ul li {
  margin-bottom: 10px;
  cursor: pointer;
}
.posts .nav ul li.active {
  color: red;
}
.posts .post-content{
  padding-left: 50px;
  padding-right: 20px;
}
</style>