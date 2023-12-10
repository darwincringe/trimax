<template>
  <div class="background-img background-blur-left">
    <div class="px-2 mx-2 overlay-container">
      <div class="row mt-5">
        <div class="col-12 col-md-6 col-xxl-3">
          <h1 class="home-title">
            THE POWER PUFF GIRLS MOVIE
          </h1>
          <h5>
            After destroying the city of Townsville in a game of tag, a trio of super-powered little girls must redeem themselves by stopping a vengeful monkey's plot for world domination.
          </h5>
          <button type="button" class="btn btn-primary my-4 play-button btn-lg" @click="playMovie">
            <i class="fas fa-play px-2"></i> Play
          </button>
        </div>
      </div>

      <div class="row" style="margin-top: 200px;">
        <div class="col-md-6 col-12">
          <p class="fw-bold text-shadow">Books</p>
          <div class="row">
            <div class="col-6 col-md-2 mb-4" v-for="(item, key) in books" :key="key">
              <div class="card card-home card-book"
                  :style="{
                  backgroundImage: `url(${item.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '176px !important',
                    cursor: 'pointer'
                  }"
                  @click="gotoRead(item, 'movie')"
              >
                  <div class="card-title">
                    <small>{{ item.name }}</small>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-2">
          <p class="fw-bold text-shadow">Games</p>
          <div class="row">
            <div class="col-6 mb-4" v-for="(item, key) in games" :key="key">
              <div class="card card-home"
                  :style="{
                    backgroundImage: `url(${item.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '75px',
                    cursor: 'pointer'
                  }"
                  @click="gotoPlay(item)"
              >
                  <div class="card-title">
                    <small>{{ item.name }}</small>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-2">
          <p class="fw-bold text-shadow">Movies</p>
          <div class="row">
            <div class="col-6 mb-4" v-for="(item, key) in movies" :key="key">
              <div class="card card-home"
                  :style="{
                    backgroundImage: `url(${item.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '75px',
                    cursor: 'pointer'
                  }"
                  @click="gotoWatch(item, 'movie')"
              >
                  <div class="card-title">
                    <small>{{ item.name }}</small>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-2">
          <p class="fw-bold text-shadow">Series</p>
          <div class="row">
            <div class="col-6 mb-4" v-for="(item, key) in series" :key="key">
              <div class="card card-home"
                  :style="{
                    backgroundImage: `url(${item.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '75px',
                    cursor: 'pointer'
                  }"
                  @click="gotoWatch(item, 'series')"
              >
                  <div class="card-title">
                    <small>{{ item.name }}</small>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      books: [
        {
          name: 'evils, ghosts most of horror',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=rs40ab2e7740e15_1373743831.6306939125',
          book_id: 'rs40ab2e7740e15_1373743831.6306939125#0,558,2484',
        },
        {
          name: 'Anthology Complex',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=ktae0fcbd24dc75_1473069829.3167879581',
          book_id: 'ktae0fcbd24dc75_1473069829.3167879581#0,558,152982',
        },
        {
          name: 'A cute love story',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=nidhi.agrawal_1272188264.1893169880',
          book_id: 'nidhi.agrawal_1272188264.1893169880#0,558,15210',
        },
        {
          name: 'A Howl In The Night',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=lucky97_1307627974.3750898838',
          book_id: 'lucky97_1307627974.3750898838#0,558,341046',
        },
        {
          name: '*the little mermaid',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=narutolover11_1312172205.4071800709',
          book_id: 'narutolover11_1312172205.4071800709#0,558,1206',
        },
        {
          name: 'The Boy in the Striped Pajamas',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=himabindu.works8_1287209748.6565001011',
          book_id: 'himabindu.works8_1287209748.6565001011#0,558,4068',
        },
      ],
      watching: [
        {
          name: 'Alita Battle Angel',
          background: 'https://lumiere-a.akamaihd.net/v1/images/p_alita_battle_angel_20cs_da903cc8.jpeg',
          imdb: 'tt0437086',
        },
        {
          name: 'Blade Runner',
          background: 'https://helios-i.mashable.com/imagery/articles/03fu62l03INV4Ec7oc5GJGm/hero-image.fill.size_1248x702.v1623366102.jpg',
          imdb: 'tt0083658',
        },
        {
          name: 'The Grand Budapest Hotel',
          background: 'https://fthspatpress.com/wp-content/uploads/2018/02/wa2.png',
          imdb: 'tt2278388',
        },
        {
          name: 'The Shawshank Redemption',
          background: 'https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg',
          imdb: 'tt0111161',
        },
        {
          name: 'Weathering with You',
          background: 'https://m.media-amazon.com/images/M/MV5BNzE4ZDEzOGUtYWFjNC00ODczLTljOGQtZGNjNzhjNjdjNjgzXkEyXkFqcGdeQXVyNzE5ODMwNzI@._V1_FMjpg_UX1000_.jpg',
          imdb: 'tt9426210',
        },
        {
          name: 'Get Out',
          background: 'https://m.media-amazon.com/images/I/91yhYRckRvL._AC_UF1000,1000_QL80_.jpg',
          imdb: 'tt5052448',
        },
      ],
      movies: [
        {
          name: 'The Lord of the Rings',
          background: 'https://m.media-amazon.com/images/S/pv-target-images/b9f4dd7d3f9fa2cb36c757c7aecb690e8fc416e4165eb2d68d5fbdb837a19541.jpg',
          imdb: 'tt0120737',
        },
        {
          name: 'Interstellar',
          background: 'https://thediscoverer.columbus.edu.co/wp-content/uploads/2023/02/gggg-900x506.jpg',
          imdb: 'tt0816692',
        },
        {
          name: 'Superbad',
          background: 'https://res.cloudinary.com/jerrick/image/upload/v1610578424/5fff79f883f7a1001c77abaa.jpg',
          imdb: 'tt0829482',
        },
        {
          name: 'Eternal Sunshine of the Spotless Mind',
          background: 'https://alternativemovieposters.com/wp-content/uploads/2022/02/alexander-stueber%E2%80%93eternal-sunshine.jpg',
          imdb: 'tt0338013',
        },
  
      ],
      series: [
        {
          name: 'The Night Of',
          background: 'https://play-lh.googleusercontent.com/kGrjAcfiZHzjWeEfwb3vLWn1QA8KhexTl19dQbbyDkgkQncxMZsGYW0K8PrZPbJ-GBQ',
          imdb: 'tt2401256',
        },
        {
          name: 'Chernobyl',
          background: 'https://blogs.egu.eu/geolog/files/2023/08/Chernobyl-blog-2-1400x800.jpg',
          imdb: 'tt7366338',
        },
        {
          name: 'True Detective',
          background: 'https://imageservice.sky.com/pcms/c6d11f22-02e3-11e9-9904-8f47bd3b7f0e/LAND_16_9?territory=GB&proposition=NOWTV&language=eng',
          imdb: 'tt2356777',
        },
        {
          name: 'The Pacific',
          background: 'https://flxt.tmsimg.com/assets/p8000042_b_h10_ae.jpg',
          imdb: 'tt0374463',
        },
      ],
      games: [
        {
          name: 'Mine Clone',
          background: 'https://images.crazygames.com/mine-clone/20211108154013/mine-clone-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&w=236&fit=crop',
          game_id: 'mine-clone',
        },
        {
          name: 'Pixel Warfare',
          background: 'https://images.crazygames.com/pixel-warfare_16x9/20231106041100/pixel-warfare_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&w=236&fit=crop',
          game_id: 'pixel-warfare',
        },
        {
          name: 'Terraria',
          background: 'https://images.crazygames.com/games/terraria/cover-1620122998103.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&w=236&fit=crop',
          game_id: 'terraria',
        },
        {
          name: 'Haunted School',
          background: 'https://images.crazygames.com/games/haunted-school---horror-game/cover-1657021606968.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&w=236&fit=crop',
          game_id: 'haunted-school---horror-game',
        },
      ]
    }
  },
  methods: {
    handleArrowKeys(event) {
      // Get the active element (focused element)
      const activeElement = document.activeElement;

      // Check if the active element is a card
      if (activeElement.classList.contains('card-home')) {
        const index = Array.from(activeElement.parentNode.children).indexOf(activeElement);

        // Handle arrow key presses
        switch (event.key) {
          case 'ArrowLeft':
            this.navigateToCard(index - 1);
            break;
          case 'ArrowRight':
            this.navigateToCard(index + 1);
            break;
        }
      }
    },

    navigateToCard(index) {
      // Get all card elements
      const cards = document.querySelectorAll('.card-home');

      // Ensure the index is within bounds
      if (index >= 0 && index < cards.length) {
        // Focus the next card
        cards[index].focus();
      }
    },
    gotoWatch(data, type) {
      this.$router.push({ name: 'watch-page', params: { id: data.imdb}, query: { type } });
    },
    gotoPlay(data) {
      this.$router.push({ name: 'play-page', params: { id: data.game_id} });
    },
    gotoRead(data) {
      this.$router.push({ name: 'read-page', params: { id: data.book_id} });
    },
    playMovie() {
      this.$router.push({ name: 'watch-page', params: { id: 'tt0289408'}, query: { type: 'movie' } });
    },
  }
}
</script>