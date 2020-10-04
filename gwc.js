var a = new Vue({
	el: '#app',
	data: {
		list: [{
				name: 'jb',
				price: 99,
				count: 1
			},
			{
				name: 'jer',
				price: 88,
				count: 1
			},
			{
				name: 'cd',
				price: 20,
				count: 1
			}
		]
	},

	computed: {
		prices: function() {
			var t = 0;
			for (var i = 0; i < this.list.length; i++) {
				var b = this.list[i];
				t += b.count * b.price;
			}
			return t/* .toString().replace(/\B(?=(\d{3})+$)/g, ',') */;
		}
	},
	methods: {

		djj: function(index) {
			this.list[index].count++;
		},

		djr: function(index) {
			if (this.list[index].count === 1) return;
			this.list[index].count--;
		},

		yc: function(index) {
			this.list.splice(index, 1);
		}

	}
})
