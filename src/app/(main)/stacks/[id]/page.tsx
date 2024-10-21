export default function StackDetailPage({ params: { id } }: { params: { id: string } }) {
  console.log(id)

  return (
    <div>
      <h2>({id})</h2>
    </div>
  )
}
