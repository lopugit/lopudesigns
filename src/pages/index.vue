<template lang="pug">
	.flex.flex-center.home
		.home-positioner
			.home-title.q-mt-xl
				| Portfolio
			.cards.q-mb-xl
				q-card(
					v-for="(website, index) in websites"
					:key="index"
					inline
					color="white"
					).q-ma-sm
					q-card-media
						slick(
							:ref="'slick-'+website.name"
							:options="slickOptions"
							)
							img(
								v-for="(img, index) in website.images"
								:src="'statics/img/'+website.name+'/'+img+'.png'"
							)
						q-card-title(
							).text-primary 
							a(
								:href="'http://'+website.name+'.lopudesigns.bld'"
								)
								| {{ website.name+website.domain }}
							span(slot="subtitle").text-primary Made by 
								a(
									@click="$emit('openContact')"
									).site-author
									| {{ website.author }}
							//- a(:href="'http://'+website.name + website.domain") {{ website.name + website.domain }}
					//- q-list
						q-list-header.text-primary Services used
						q-collapsible(
							label="Design"
							icon="tv"
						).text-primary
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Logo"
								)
						q-collapsible(
							label="Development"
							icon="tv"
						).text-primary
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Website"
								)
						q-collapsible(
							label="E-Commerce"
							icon="tv"
						).text-primary
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Shopify Checkout"
								)
						q-collapsible(
							label="CMS"
							icon="tv"
						).text-primary
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Wordpress"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Lopu CMS"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Shopify CMS"
								)
						q-collapsible(
							label="SEO"
							icon="tv"
						).text-primary
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="2 Keywords top 2 results"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="5 Keywords top 2 results"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="50 Keywords front page"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="100 Keywords front page"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Back-linking"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="L-Network"
								)
						q-collapsible(
							label="Marketing"
							icon="tv"
						).text-primary
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Adwords"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Facebook"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Instagram"
								)
						q-collapsible(
							label="Product Photography"
							icon="tv"
						).text-primary
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="< 20 Pictures"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="< 50 Pictures"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="< 100 Pictures"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="> 100 Pictures"
								)

						q-collapsible(
							label="Email"
							icon="tv"
						).text-primary
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Infinite Email"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Google Admin Integration"
								)

						q-collapsible(
							label="API"
							icon="tv"
						).text-primary
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="HTTP"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Web Sockets"
								)
						q-collapsible(
							label="Database"
							icon="tv"
						).text-primary
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="MongoDB"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="MySQL"
								)
							q-item
								q-item-side(
									icon="tv"
								)
								q-item-main(
									label="Neo4J"
								)
						//- q-pagination(
							:min="0"
							:max="website.images"
							direction-links
							@input="newVal=>{ moveSlider('slick-'+website.name, newVal) }"
							@change="newVal=>{ moveSlider('slick-'+website.name, newVal) }"
							)
							//- :max-pages="8"
							
							
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'

export default {
	name: 'PageIndex',
	components: {Slick},
	data(){
		return {
			slickOptions: {
				slidesToShow: 1
			},
			websites: [
				{
					name: 'planetexpress',
					domain: '.global',
					images: 8,
					author: 'lopu'
				},
				{
					name: 'alopu',
					domain: '.com',
					images: 2,
					author: 'lopu'
				},
				{
					name: 'ozledgrowlights',
					domain: '.com.au',
					images: 10,
					author: 'lopu'
				},
				{
					name: 'myleisure',
					domain: '.com.au',
					images: 6,
					author: 'lopu'
				},
				{
					name: 'danceforovariancancer',
					domain: '.com.au',
					images: 12,
					author: 'lopu'
				},
				{
					name: 'estateliquidators',
					domain: '.com.au',
					images: 2,
					author: 'lopu'
				}
			]
		}
	},
	created(){
		for(var i=0;i<this.websites.length;i++){
			// console.log('http://api.linkpreview.net/?key=5acf3522e03ea918d58be2384bacb0c9bfc0481364d1a&q='+this.websites[i].name+this.websites[i].domain)
			// this.$axios.get('http://api.linkpreview.net/?key=5acf3522e03ea918d58be2384bacb0c9bfc0481364d1a&q='+this.websites[i].name+this.websites[i].domain)
			// .then(res=>{
			//   console.log(res)
			// })
			// .catch(err=>{
			//   console.error(err)
			// })
		}
	},
	methods: {
		moveSlider(slider, to){
			console.log(this.$refs)
			console.log({slider, to})
			this.$refs[slider][0].goTo(to-1)
		}
	}
}
</script>

<style lang="stylus">
@import '~variables'
.home
	background $tertiary
	min-height 100vh
	padding-top: 80px
	align-items flex-start
	justify-content: center
	.home-positioner
		width auto
		max-width 100%
		flex-wrap wrap
		display: flex
		align-items flex-start
		justify-content: center
		flex-direction column
		.home-title
			margin: 8px
			margin-top: 35px
			font-size 1.8rem !important
			font-family adip
			color $secondary
			text-decoration none
			text-align center
			width: 100%
			max-width 100%
		.cards
			width auto
			max-width 100%
			flex-wrap wrap
			display: flex
			align-items flex-start
			justify-content: center

.q-card
	width: 500px
	max-width: 100%
	// border-top-right-radius 6px
	// border-top-left-radius 6px
	overflow hidden 
	box-sizing: border-box
	border: none
.slick-slider
	.slick-slide
		&>div
			max-height: 250px
	img
		width 100% !important
		height auto !important
		max-width 100%
	.slick-arrow
		display none !important
a
	color $primary
	text-decoration none
	animate(all, 300ms, ease)
	&:hover
		color darken($secondary, 0)
		text-decoration none
.site-author
	font-weight 900
	color $secondary
	&:hover
		color lighten($secondary, 10)
</style>
