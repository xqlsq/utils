import { observal, computed } from './Computed';

class Data {

    @observal
    name = 'xubo';

    @computed(function(v) {
        console.log('name 的值被改变啦！！！！', v);
    })
    nameWordString = () => {
        return this.name.split('');
    }
}

var data = new Data();
data.nameWordString;
data.nameWordString;
data.nameWordString;
data.name = 'laowang'
data.name = 'laowang11111'
