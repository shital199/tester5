class App extends Component {
    constructor() {
      super();
      this.state = {
        name: 'React',
      };
    }
  
    shippingStatus = [
      {
        id: 0,
        title: 'On Process',
        image: require('./check.svg'),
        status: 'check',
      },
      {
        id: 1,
        title: 'Mapping Driver',
        image: require('./check.svg'),
        status: 'check',
      },
      {
        id: 2,
        title: 'Driver Confirmed',
        image: require('./completed.svg'),
        status: 'completed',
      },
      {
        id: 3,
        title: 'On the way',
        image: require('./inprogress.svg'),
        status: 'inprogress',
      },
      {
        id: 4,
        title: 'Completed',
        image: require('./pending.svg'),
        status: 'pending',
      },
    ];
  
    render() {
      return (
        <div>
          <div className="flex items-center justify-between mx-auto w-[300px]">
            {this.shippingStatus.map((data, index) => {
              return (
                <>
                  <div key={index}>
                    <div
                      className={`relative flex items-center flex-col py-5 justify-center text-center`}
                    >
                      <div
                        className={`text-sm whitespace-nowrap font-semibold ${
                          index % 2
                            ? 'absolute -top-[1px]'
                            : 'absolute -bottom-[0px]'
                        }`}
                      >
                        {data.title}
                      </div>
                      <img src={data.image} />
                    </div>
                  </div>
                  {index < this.shippingStatus.length - 1 && (
                    <div
                      className={`h-[2px] ${
                        data.status === 'check' ? 'bg-red-500' : 'bg-gray-400'
                      } flex-1`}
                    ></div>
                  )}
                </>
              );
            })}