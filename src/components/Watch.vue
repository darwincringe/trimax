<template>
  <div class="background-img background-blur-bottom">
    <div class="overlay-container">
        <div class="px-2 mx-2" >
					<div class="row">
							<div class="col-12">
							<h1>Movies and Series</h1>
							</div>
					</div>

					<div class="row mt-4">
							<div class="col-12 mb-1">
								<h3>Everyone's Watching</h3>
							</div>
							<div class="col-12">
								<div class="row">
										<div class="col-md-2 mb-4" v-for="(item, key) in watching" :key="key">
											<div class="card"
													:style="{
														backgroundImage: `url(${item.background})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center',
														height: '150px',
														cursor: 'pointer'
													}"
													@click="onClick(item, 'movie')"
											>
												<div class="card-title">
													<h5>{{ item.name }}</h5>
												</div>
											</div>
										</div>
								</div>
							</div>
					</div>

					<div class="row mt-4">
							<div class="col-12 mb-1">
								<h3>Movies</h3>
							</div>
							<div class="col-12">
								<div class="row">
										<div class="col-md-2 mb-4" v-for="(item, key) in movies" :key="key">
											<div class="card"
													:style="{
														backgroundImage: `url(${item.background})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center',
														height: '150px',
														cursor: 'pointer'
													}"
													@click="onClick(item, 'movie')"
											>
												<div class="card-title">
													<h5>{{ item.name }}</h5>
												</div>
											</div>
										</div>
								</div>
							</div>
					</div>

					<div class="row mt-4">
							<div class="col-12 mb-1">
								<h3>Series</h3>
							</div>
							<div class="col-12">
								<div class="row">
										<div class="col-md-2 mb-4" v-for="(item, key) in series" :key="key">
											<div class="card"
													:style="{
													backgroundImage: `url(${item.background})`,
													backgroundSize: 'cover',
													backgroundPosition: 'center',
													height: '150px',
													cursor: 'pointer'
													}"
													@click="onClick(item, 'series')"
											>
												<div class="card-title">
													<h5>{{ item.name }}</h5>
												</div>
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
        {
          name: 'Toy Story',
          background: 'https://lumiere-a.akamaihd.net/v1/images/p_toystory_19639_424d94a0.jpeg',
          imdb: 'tt0114709',
        },
        {
          name: 'The Silence of the Lambs',
          background: 'https://cdn.mos.cms.futurecdn.net/aybwG6Kx6thfNAKNjXcxnV.jpg',
          imdb: 'tt0102926',
        },
      ],
      series: [
        {
          name: 'Firefly',
          background: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/641d312c9aafe15cfff49e089ceddbfb4761891a513f6d7cb835ee4e4db79796._RI_TTW_.jpg',
          imdb: 'tt0303461',
        },
        {
          name: 'Freaks and Greeks',
          background: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b2f9e873fcc89a71facd71d49d5d7916854d2c686d119bab0db87222abeb3181._RI_TTW_.jpg',
          imdb: 'tt0193676',
        },
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
      ]
    }
  },
  methods: {
    onClick(data, type) {
      this.$router.push({ name: 'watch-page', params: { id: data.imdb}, query: { type } });
    }
  }
}
</script>