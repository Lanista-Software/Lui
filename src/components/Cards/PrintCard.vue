<template>
  <div class="print-card ">
    <div class="print-card-row radius-05 bg-white shadow">
      <div class="card-img">
        <slot name="img" />
      </div>
      <div class="card-body">
        <slot name="title" />
        <slot />
        <div class="card-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.print-card {
  max-width: 275px;
}
.print-card-row {
  width: 100%;
  overflow: hidden;
}
.card-img {
  max-height: 160px;
  overflow: hidden;
}
.card-img img {
  width: 100%;
  height: auto;
  transition: all 0.5s ease-in-out;
}
.card-body {
  display: block;
  padding: 16px 20px;
}
.card-body h4 {
  margin-bottom: 10px;
}
.card-body p {
  line-height: 17px;
  margin-bottom: 10px;
}
.card-footer {
  align-items: flex-end;
  column-gap: 10px;
  display: flex;
  transition: all 0.5s ease-in-out;
}
a {
  text-decoration: none;
}
.card-footer i {
  height: max-content;
  transition: all 0.5s ease-in-out;
}
.card-footer {
  display: inline-flex;
  align-items: center;
}
.print-card-row:hover .card-img img {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
}
.print-card-row:hover .card-footer i {
  margin-left: 10px;
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
}
</style>
