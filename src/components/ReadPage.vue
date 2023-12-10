<template>
	<div class="background-img background-blur-bottom" style="overflow: hidden;">
		<div class="row overlay-container">
			<div class="col-12">
				<iframe v-if="movieSource"
					class="p-4"
					width="100%"
					height="800"
					:src="movieSource"
					frameborder="0"
					allowfullscreen
					scrolling="no"
					sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
				></iframe>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ReadPage',
	computed: {
		movieSource() {
			return `https://www.bookrix.com/book.html?bookID=${this.$route.params.id}`;
		}
	}
}

</script>