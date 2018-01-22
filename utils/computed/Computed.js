/**
 * @author xubo
 * @link https://juejin.im/post/5982e6bc5188253d7821e8f9
 */  

let Dep = null;

export function observal(...params) {
    let [constructor, name, descriptor] = params;
    const deps = [];
    let value = descriptor.initializer ? descriptor.initializer() : descriptor.value;
    return {
        enumerable: true,
        configurable: true,
        get() { // computed值在get的时候会带动依赖的值的get，从而自动找到依赖，通过deps去存储需要在以来的值set的时候运行的函数
            if (Dep) {
                deps.push(Dep);
                return value;
            }
            return value;
        },
        set(newV) { // 被依赖的值在设置之后执行需要触发的函数
            value = newV;        
            deps.forEach(changeFn => changeFn());
        },
    }
}

export function computed(func) {
    return (...params) => {
        let [constructor, name, descriptor] = params;
        let isInitializer = false;
        let value;
        if (descriptor.initializer) { // 如果是实例方法
            value = descriptor.initializer;
            isInitializer = true;
        } else { // 如果是原型链上面的方法
            value = descriptor.value;
        }
        let once = 1; // 只设置一次依赖
        return {
            enumerable: true,
            configurable: true,
            get() { // 计算属性必定是一个 纯函数！谨记！
                let _value;
                if (isInitializer) {
                    _value = value.call(this); // bind this
                } else {
                    _value = value;
                }
                let func1 = () => { // 留住this && 变动后的值会在运行时才会获得
                    return func(_value.call(this));
                }
                Dep = once && func1;
                let result = _value.call(this);
                once = 0; // once清空。不再设置依赖
                Dep = null; // Dep 依赖清空
                return result;
            },
            set(newV) {
                value = newV;
            },
        }
    }
}