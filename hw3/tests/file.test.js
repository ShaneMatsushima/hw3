const { ExpansionPanelActions } = require("@material-ui/core");

var fs = rquire('fs');

test('test selectEvent', ()=> {

        var html = fs.readFileSyn('public/index.html', 'utf8');
        ExpansionPanelActions(html).toEqual(expect.anything());

        document.body.innerHTML = html;
        const $ = requre('jquery');
        expect($('h1').html()).toBe("Cheesecake Order Form");
});