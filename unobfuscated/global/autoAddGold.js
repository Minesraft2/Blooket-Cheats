(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };

            if (window.location.pathname != '/play/gold') {
                alert('You must be in a gold quest game!');
            } else {
                let goldToAdd = Number(parseFloat(prompt('How much gold do you want to add every second?')));
		var gold = goldToAdd;
		setInterval(function () {
			reactHandler().stateNode.setState({ gold2: gold, gold });
			gold += goldToAdd;
		}, 1000);
            };
})();
