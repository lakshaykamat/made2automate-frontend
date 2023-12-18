import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/ui/toggle"

const Home = () => {

  const DASHBOARD_DATA = [
    {
      id: 1,
      title: "Total Sales",
      description: "Sales of December",
      data: 1243
    },
    {
      id: 2,
      title: "Total Sales",
      description: "Sales of December",
      data: 1243
    },
    {
      id: 3,
      title: "New Stock",
      description: "Stock of December",
      data: 1243
    },
    {
      id: 4,
      title: "Total Leads",
      description: "Leads of December",
      data: 1243
    },
    {
      id: 5,
      title: "Total Revenue",
      description: "Revenue of this year",
      data: 3_21_352
    },
    {
      id: 6,
      title: "Total Customer Served",
      description: "Custome serverd till now",
      data: 3200
    }
  ]
  const LEAD_DATA = {
    title: "Total Leads",
    description: "Summary of lead recevied",
    leadData: [
      {
        id: 1,
        clientName: "Rajesh Kapoor",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reiciendis?",
        quantity: 120
      },
      {
        id: 2,
        clientName: "Megha Kapoor",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reiciendis?",
        quantity: 120
      }
    ]
  }

  const ORDER_DATA = {
    title: "Total Orders",
    description: "Summary of orders",
    orderData: [
      {
        id: 1,
        productName: "IRS Sensor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reiciendis?",
        quantity: 12
      },
      {
        id: 2,
        productName: "IRS Sensor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reiciendis?",
        quantity: 12
      }
    ]
  }
  return (
    <>
      <header className="border-b-2 flex bg-card justify-around py-3 items-center">
        <h3>Made2Automate</h3>
        <div className="flex gap-3 items-center">
          <ModeToggle />
          <Button size={"icon"} variant={"default"}>
            <LogOut />
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl my-6 px-4">
        <h1>Dashboard</h1>
        <section className="items-start mt-6 justify-center xl:justify-start flex flex-wrap gap-6">
          {
            DASHBOARD_DATA.map((data) => {
              return (
                <DashBoardCard title={data.title} data={data.data} description={data.description} key={data.id} />
              )
            })
          }
        </section>

        <div className="mt-12">
          <h1>Oders and Leads</h1>
          <div className="mt-6 items-center gap-6 lg:flex-row flex-col flex justify-around">
            <OrderCard title={ORDER_DATA.title} description={ORDER_DATA.description} data={ORDER_DATA.orderData} />
            <LeadCard
              title={LEAD_DATA.title}
              description={LEAD_DATA.description}
              data={LEAD_DATA.leadData}
            />
          </div>
        </div>
      </main>
    </>
  )
}

const DashBoardCard = ({ title, data, description }: { title: String, data: number, description: String }) => {
  return (
    <Card className="w-full sm:w-auto px-6 gap-6 flex items-center justify-between">
      <CardHeader>
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <h3>{data}</h3>
      </CardContent>
    </Card>
  )
}

const LeadCard = ({ title, description, data }: { title: String, description: String, data: Array<any> }) => {
  return (
    <Card className="max-w-md px-4 pt-2">
      <section>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h2>{title}</h2>
              <span>{description}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {
            data.map((item) => {
              return (
                <div key={item.id} className=" px-4 py-4 rounded hover:bg-accent">
                  <h3>{item.clientName}</h3>
                  <span>{item.message}</span>
                  <p><b>Quantity:</b>{item.quantity}</p>
                  <hr className="mt-4" />
                </div>
              )
            })
          }
        </CardContent>
        <CardFooter>
          <Button>View all</Button>
        </CardFooter>
      </section>

    </Card>
  )
}
const OrderCard = ({ title, description, data }: { title: String, description: String, data: Array<any> }) => {
  return (
    <Card className="max-w-md px-4 pt-2">
      <section>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h2>{title}</h2>
              <span>{description}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {
            data.map((item) => {
              return (
                <div key={item.id} className=" px-4 py-4 rounded hover:bg-accent">
                  <h3>{item.productName}</h3>
                  <span>{item.description}</span>
                  <p><b>Quantity:</b>{item.quantity}</p>
                  <hr className="mt-4" />
                </div>
              )
            })
          }
        </CardContent>
      </section>
      <CardFooter>
        <Button>View all</Button>
      </CardFooter>
    </Card>
  )
}
export default Home