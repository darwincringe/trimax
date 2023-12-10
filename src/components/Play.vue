<template>
  <div class="background-img background-blur-bottom">
    <div class="overlay-container">
        <div class="px-2 mx-2" >
					<div class="row">
							<div class="col-12">
							<h1>Play Games</h1>
							</div>
					</div>

					<div class="row mt-4">
							<div class="col-12 mb-1">
								<h3>Top Games</h3>
							</div>
							<div class="col-12">
								<div class="row">
										<div class="col-md-2 col-6 mb-4" v-for="(item, key) in top_games" :key="key">
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
								<h3>2 Player Games</h3>
							</div>
							<div class="col-12">
								<div class="row">
										<div class="col-md-2 col-6 mb-4" v-for="(item, key) in two_player_games" :key="key">
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
								<h3>Trending Right Now</h3>
							</div>
							<div class="col-12">
								<div class="row">
										<div class="col-md-2 col-6 mb-4" v-for="(item, key) in trending" :key="key">
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
      top_games: [
				{
          name: 'Mine Clone',
          background: 'https://images.crazygames.com/mine-clone/20211108154013/mine-clone-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&w=236&fit=crop',
          game_id: 'mine-clone',
        },
				{
					name: 'Shell Shockers',
					background: 'https://images.crazygames.com/shellshockersio_16x9/20231109061618/shellshockersio_16x9-cover',
					game_id: 'shellshockersio',
				},
				{
          name: 'Pixel Warfare',
          background: 'https://images.crazygames.com/pixel-warfare_16x9/20231106041100/pixel-warfare_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&w=236&fit=crop',
          game_id: 'pixel-warfare',
        },
				{
					name: 'Smash Karts',
					background: 'https://images.crazygames.com/smash-karts_16x9/20231127161219/smash-karts_16x9-cover',
					game_id: 'smash-karts',
				},
				{
					name: 'Bloxd.io',
					background: 'https://images.crazygames.com/games/bloxdhop-io/cover-1671463581901.png',
					game_id: 'bloxdhop-io',
				},
				{
					name: 'Table Tennis World Tour',
					background: 'https://images.crazygames.com/table-tennis-world-tour_16x9/20230908041108/table-tennis-world-tour_16x9-cover',
					game_id: 'table-tennis-world-tour',
				},
			],
      two_player_games: [
				{
					name: 'Ragdoll Archers',
					background: 'https://images.crazygames.com/ragdoll-archers_16x9/20230901083549/ragdoll-archers_16x9-cover',
					game_id: 'ragdoll-archers',
				},
				{
					name: '8 Ball Billiards Classic',
					background: 'https://images.crazygames.com/8-ball-billiards-classic_16x9/20231108025958/8-ball-billiards-classic_16x9-cover',
					game_id: '8-ball-billiards-classic',
				},
				{
					name: 'Crazy Roll 3D',
					background: 'https://images.crazygames.com/games/crazy-roll-3d/cover_16x9-1693299833079.png',
					game_id: 'crazy-roll-3d',
				},
				{
					name: 'Basket Random',
					background: 'https://images.crazygames.com/basket-random/20230126094209/basket-random-cover',
					game_id: 'basket-random',
				},
				{
					name: 'Soccer Legends 2021',
					background: 'https://images.crazygames.com/games/soccer-legends-2021/cover-1619606990485.png',
					game_id: 'soccer-legends-2021',
				},
				{
					name: 'Stickman Battle Fight Warriors',
					background: 'https://images.crazygames.com/stickman-supreme-duelist-2/20230314082715/stickman-supreme-duelist-2-cover',
					game_id: 'stickman-supreme-duelist-2',
				},
			],
      trending: [
				{
					name: "Vegas Clash 3D",
					background: "https://images.crazygames.com/vegas-clash-3d-yxd/20211015093735/vegas-clash-3d-yxd-cover",
					game_id: "vegas-clash-3d-yxd"
				},
				{
					name: "Superstar Family Dress Up",
					background: "https://images.crazygames.com/superstar-family-dress-up-game/20221026180310/superstar-family-dress-up-game-cover",
					game_id: "superstar-family-dress-up-game"
				},
				{
					name: "BrutalMania.io (Brutal Mania)",
					background: "https://images.crazygames.com/games/brutalmania-io/cover-1584553430060.png",
					game_id: "brutalmania-io"
				},
				{
					name: "Shopaholic Black Friday",
					background: "https://images.crazygames.com/shopaholic-black-friday_16x9/20231120030619/shopaholic-black-friday_16x9-cover",
					game_id: "shopaholic-black-friday"
				},
				{
					name: "Evil Neighbor 2",
					background: "https://images.crazygames.com/evil-neighbor-2/20230505085203/evil-neighbor-2-cover",
					game_id: "evil-neighbor-2"
				},
				{
					name: "Fortnite Nerf Battle",
					background: "https://images.crazygames.com/games/fortnite-nerf-battle/cover-1636968537368.png",
					game_id: "fortnite-nerf-battle"
				}
		]

    }
  },
  methods: {
    onClick(data) {
      this.$router.push({ name: 'play-page', params: { id: data.game_id} });
    }
  }
}
</script>