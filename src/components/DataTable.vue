<template>
  <div class="document-table card mt-lg ml-xs mr-xs">
    <div class="header  pl-lg pr-md">
      <div class="mt-lg">
        <h2>Document</h2>
        <p class="text-gray-bold">Document tracking information</p>
      </div>

    </div>
    <table class="mb-md  pl-md">
      <thead>
      <tr class="text-bold ">
        <th>Name</th>
        <th>File</th>
        <th>Category</th>
        <th>Author</th>
        <th class="text-gray-bold ">Status</th>
      </tr>
      </thead>
      <tbody>
      <tr class="" v-for="document in documents" :key="document.name">
        <td>{{ document.name }}</td>
        <td>{{ document.file }}</td>
        <td>{{ document.category }}</td>
        <td>{{ document.author }}</td>
        <td :class="document.status"  >
          <span class=" pt-md pb-md text-bold text-sm  pl-lg pr-lg button"
                :class="document.status==='Send'?'bg-green text-dark-green':'bg-orange text-dark-orange'"
          >
            {{ document.status }}
          </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      frequency: 'weekly',
      documents: [
        {
          name: 'Annual Report',
          file: 'PDF',
          category: 'Property',
          author: 'Diana Matthews',
          status: 'Send'
        },
        {
          name: 'Business Plan',
          file: 'WORD',
          category: 'Cryptocurrency',
          author: 'Philip James',
          status: 'Send'
        },
        {
          name: 'Marketing Tool',
          file: 'PDF',
          category: 'Content Creator',
          author: 'Amanda Ross',
          status: 'Pending'
        }
      ]
    }
  }
}
</script>

<style scoped>
.document-table {
  border-collapse: collapse;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}
.button{
  display: inline-flex;
  align-items: center;
  border-radius: 15px;
  font-weight: 700;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.header h2 {
  margin: 0;
}


table {
  width: 100%;

}

th, td {
  padding: 10px;
  text-align: left;
}
</style>