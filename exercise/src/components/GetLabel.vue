<template>
  <div>
    <p>
      要处理的数组:
      <pre>
  let objArr = [{
    label: "一级",
    objChildren: [{
      label: "二级",
      objChildren: [{
        label: "三级",
        objChildren: [{
          label: "四级",
          objChildren: [{
            label: "五级",
          }],
        }],
      }],
    }],
  }]
      </pre>
    </p>
    <p>数组展开后:<br />{{ arrFlatedObj }}</p>
    <p>获取到的label组成的数组:<br />{{ arr }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      arrFlatedObj: {},
    };
  },
  methods: {
    getLabel(obj) {
      if (!obj.objChildren) {
        return this.arr.push(obj.label);
      }
      obj.objChildren = { ...obj.objChildren }[0];
      this.arr.push(obj.label);
      return this.getLabel(obj.objChildren);
    },
  },
  mounted() {
    let objArr = [
      {
        label: "一级",
        objChildren: [
          {
            label: "二级",
            objChildren: [
              {
                label: "三级",
                objChildren: [
                  {
                    label: "四级",
                    objChildren: [
                      {
                        label: "五级",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    this.arrFlatedObj = { ...objArr }[0];
    this.getLabel(this.arrFlatedObj);
  },
};
</script>