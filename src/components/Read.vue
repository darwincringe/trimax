<template>
  <div class="background-img background-blur-bottom">
    <div class="overlay-container">
        <div class="px-2 mx-2" >
					<div class="row">
							<div class="col-12">
							<h1>Books</h1>
							</div>
					</div>
					<div class="row mt-4">
							<div class="col-12 mb-1">
								<h3>Popular Books</h3>
							</div>
							<div class="col-8">
								<div class="row">
										<div class="col-md-2 mb-4" v-for="(item, key) in popular" :key="key">
											<div class="card"
													:style="{
														backgroundImage: `url(${item.background})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center',
														height: '300px',
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
							<div class="col-4">
								<div class="row">
									<div class="col-md-4 mb-4" v-for="(item, key) in popular_2" :key="key">
											<div class="card"
													:style="{
														backgroundImage: `url(${item.background})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center',
														height: '300px',
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
								<h3>Drama</h3>
							</div>
							<div class="col-8">
								<div class="row">
										<div class="col-md-2 mb-4" v-for="(item, key) in drama" :key="key">
											<div class="card"
													:style="{
														backgroundImage: `url(${item.background})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center',
														height: '300px',
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
							<div class="col-4">
								<div class="row">
									<div class="col-md-4 mb-4" v-for="(item, key) in drama_2" :key="key">
											<div class="card"
													:style="{
														backgroundImage: `url(${item.background})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center',
														height: '300px',
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
      popular: [
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
			popular_2: [
				{
          name: 'Arranged',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=katywong_1340661480.7700328827',
          book_id: 'katywong_1340661480.7700328827#0,558,138006',
        },
        {
          name: 'Little Brother',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=doctorow_1212595009.1526501179',
          book_id: 'doctorow_1212595009.1526501179#0,558,294750',
        },
				{
          name: 'Teardrops of a Rose',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=ed9a9688a7474f5_1601452235.5097639561',
          book_id: 'ed9a9688a7474f5_1601452235.5097639561#0,558,11304',
        },
			],
			drama: [
				{
          name: 'Romeo and Juliet',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=bx.shakespeare_1212071424.7241220474',
          book_id: 'bx.shakespeare_1212071424.7241220474#0,558,96642',
        },
        {
          name: 'Hamlet',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=bx.shakespeare_1212064554.1297330856',
          book_id: 'bx.shakespeare_1212064554.1297330856#0,558,123426',
        },
        {
          name: 'Macbeth',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=bx.shakespeare_1212068040.4245560169',
          book_id: 'bx.shakespeare_1212068040.4245560169#0,558,75978',
        },
        {
          name: 'Ulysses',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=albiorix_1487425472.7311620712',
          book_id: 'albiorix_1487425472.7311620712#0,558,526284',
        },
        {
          name: 'Barbie Doll',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=porcelainedoll_1352500186.1275339127',
          book_id: 'porcelainedoll_1352500186.1275339127#0,558,17442',
        },
        {
          name: 'If Only',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=amani19_1315505916.9454090595',
          book_id: 'amani19_1315505916.9454090595#0,558,6264',
        },
      ],
			drama_2: [
				{
          name: 'Life Is a Dream',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=librarian_1211297138.5311210155',
          book_id: 'librarian_1211297138.5311210155#0,558,91080',
        },
        {
          name: 'Broken',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=brandy83_1360874498.7477378845',
          book_id: 'brandy83_1360874498.7477378845#0,558,128556',
        },
				{
          name: 'The Happiness Project',
          background: 'https://www.bookrix.com/image/coverpic3d.php?art=book&size=xl&p=midknight_1365528376.3324189186',
          book_id: 'midknight_1365528376.3324189186#0,558,13050',
        },
			],
    }
  },
  methods: {
    onClick(data) {
      this.$router.push({ name: 'read-page', params: { id: data.book_id} });
    }
  }
}
</script>