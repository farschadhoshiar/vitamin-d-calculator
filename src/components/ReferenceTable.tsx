import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function ReferenceTable() {
  const referenceValues = [
    { ngml: "< 20", nmoll: "< 50", meaning: "Vitamin D Deficiency" },
    { ngml: "20-35", nmoll: "50-80", meaning: "Insufficiency" },
    { ngml: "35-60", nmoll: "80-150", meaning: "Normal Values" },
    { ngml: "60-90", nmoll: "150-225", meaning: "High Values" },
    { ngml: "90-150", nmoll: "225-374", meaning: "Excess" },
    { ngml: "> 150", nmoll: "> 374", meaning: "Vitamin D Toxicity" },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Value in ng/ml</TableHead>
          <TableHead>Value in nmol/l</TableHead>
          <TableHead>Meaning</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {referenceValues.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.ngml}</TableCell>
            <TableCell>{row.nmoll}</TableCell>
            <TableCell>{row.meaning}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
} 