<template>
  <section>
    <div class="welcome app-pd mt-5">
      <div>
        <h1>Welcome back, Olivia</h1>
        <p class="text-muted">Track, manage and forecast your customers and orders.</p>
      </div>
      <div>
        <img src="~/assets/img/upload.png" alt="fidia image">
        <img src="~/assets/img/adBtn.png" alt="fidia image">
      </div>
    </div>

    <div class="stats app-pd mt-3">
      <div class="app-border mb-3">
        <div class="stat-head">
          <p>Total customers</p>
          <img src="~/assets/img/ellipsis.png" alt="fidia image">
        </div>
        <div class="stat-body">
          <div>
            <h1>2,420</h1>
            <div>
              <img src="~/assets/img/up-arrow.png" alt="fidia image">
              <small>40%</small>
              <small class="text-muted">vs last month</small>
            </div>
          </div>
          <img src="~/assets/img/up-graph.png" alt="fidia image">
        </div>
      </div>
      <div class="app-border mb-3">
        <div class="stat-head">
          <p>Members</p>
          <img src="~/assets/img/ellipsis.png" alt="fidia image">
        </div>
        <div class="stat-body">
          <div>
            <h1>1,210</h1>
            <div>
              <img src="~/assets/img/down-arrow.png" alt="fidia image">
              <small>10%</small>
              <small class="text-muted">vs last month</small>
            </div>
          </div>
          <img src="~/assets/img/down-graph.png" alt="fidia image">
        </div>
      </div>
      <div class="app-border mb-3">
        <div class="stat-head">
          <p>Active now</p>
          <img src="~/assets/img/ellipsis.png" alt="fidia image">
        </div>
        <div class="stat-body">
          <div>
            <h1>316</h1>
            <div>
              <img src="~/assets/img/up-arrow.png" alt="fidia image">
              <small>20%</small>
              <small class="text-muted">vs last month</small>
            </div>
          </div>
          <img src="~/assets/img/up-graph.png" alt="fidia image">
        </div>
      </div>
    </div>

    <div class="filters app-pd mt-3">
      <button type="button" class="btn app-accent time">
        All time <img class="filter-btn" src="~/assets/img/close-btn.png" alt="fidia image">
      </button>
      <button type="button" class="btn app-accent us">
        US, AU, +4 <img class="filter-btn" src="~/assets/img/close-btn.png" alt="fidia image">
      </button>
      <button type="button" class="btn app-border bg-transparent mfs">
        <img class="mf" src="~/assets/img/filter.png" alt="fidia image"> More Filters
      </button>
      <input class="form-control app-border search" placeholder="Search">
    </div>

    <Table />
  </section>
</template>

<script>
  export default {
    name: 'IndexPage',
  }
</script>

<style scoped>
  .welcome {
    display: flex;
    justify-content: space-between;
  }

  .stats {
    display: grid;
    grid-gap: 22px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .stats > * {
    border-radius: 5px;
    padding: 20px;
  }

  .stat-body, .stat-head {
    display: flex;
    justify-content: space-between;
  }

  .stat-head img {
    height: 15px;
  }

  .filters {
    display: grid;
    grid-gap: 4px;
    grid-template-columns: auto auto auto 1fr auto;
    grid-template-areas:
      "time us mfs . search";
  }

  .time {
    grid-area: time;
  }

  .us {
    grid-area: us;
  }

  .mfs {
    grid-area: mfs;
  }

  .search {
    grid-area: search;
  }

  .time, .us {
    background: #f2f3f5;
  }

  .filter-btn {
    margin-left: 12px;
  }

  .mf {
    margin-right: 12px;
  }

  @media (max-width: 992px) {
    .welcome, .stats {
      display: block;
    }
    .filters {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas:
        "search search"
        "mfs mfs"
        "time us"
    ;
    }
  }
</style>
