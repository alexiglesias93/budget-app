<script>
  // Svelte
  import { setContext } from "svelte";

  // Components
  import Control from "./components/Control.svelte";
  import Filters from "./components/Filters.svelte";
  import Transactions from "./components/Transactions.svelte";
  import Modal from "./components/Modal.svelte";

  // Variables
  let editMode;
  let editID;
  let activeFilter = "all";

  // Functions
  function activateEdit() {
    editMode = true;
  }

  function cancelEdit() {
    editID = null;
    editMode = null;
  }

  function toggleFilter(e) {
    activeFilter = e.detail;
  }

  function modifyTransaction(id) {
    editID = id;
    editMode = true;
  }

  // Conext
  setContext("modify", modifyTransaction);
</script>

<main class="main">
  <Control on:add={() => (editMode = 'new')} />
  <Filters on:filter={toggleFilter} {activeFilter} />
  <Transactions {activeFilter} />

  {#if editMode}
    <Modal on:close={cancelEdit} {editMode} {editID} />
  {/if}
</main>
