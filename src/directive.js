export default {
  inserted(el, binding, vnode) {
    const ref = binding.arg || 'face';
    vnode.context.$refs[ref].editArea = el;
  }
};