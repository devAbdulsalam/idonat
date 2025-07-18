// This is a high-level React-based UI wireframe for iDonat (decentralized blood donation app)
// Built for ICP with AI-integrated features in mind

import { Link } from 'react-router-dom';

function StatCard({ title, value }: { title: string; value: string }) {
	return (
		<div className="bg-white p-4 rounded-2xl shadow text-center">
			<h4 className="text-md text-gray-500">{title}</h4>
			<p className="text-xl font-bold text-red-600">{value}</p>
		</div>
	);
}

export default function Dashboard() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
			{/* Sidebar Navigation */}
			<div className="md:col-span-1 bg-white rounded-2xl shadow p-4">
				<h2 className="text-xl font-bold mb-4">iDonat</h2>
				<ul className="space-y-2">
					<li className="text-blue-600 font-semibold">Dashboard</li>
					<li>Donate Blood</li>
					<li>Emergency Alerts</li>
					<li>Rewards</li>
					<li>Leaderboard</li>
					<li>Medical Admin</li>
					<Link to="/login">Settings</Link>
				</ul>
			</div>

			{/* Main Dashboard Content */}
			<div className="md:col-span-2 space-y-4">
				{/* Welcome Header */}
				<div className="bg-gradient-to-r from-red-500 to-pink-400 text-white p-6 rounded-2xl shadow">
					<h1 className="text-2xl font-bold">Welcome back, Donor!</h1>
					<p>
						Your blood type: <span className="font-semibold">O+</span> | Next
						eligible donation:{' '}
						<span className="font-semibold">Sep 1, 2025</span>
					</p>
				</div>

				{/* Quick Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					<StatCard title="Successful Donations" value="8" />
					<StatCard title="Tokens Earned" value="2,300 LBT" />
					<StatCard title="Lives Impacted" value="24" />
					<StatCard title="Next Reward" value="500 LBT" />
				</div>

				{/* AI-Powered Recommendations */}
				<div className="bg-white rounded-2xl p-4 shadow">
					<h3 className="text-lg font-bold mb-2">Nearby Emergency Alerts</h3>
					<p className="text-sm text-gray-600">
						AI recommends urgent cases within 10km.
					</p>
					<ul className="mt-2 space-y-2">
						<li className="p-3 bg-red-100 rounded-xl">
							Type AB− needed at Kano Specialist Hospital (2.5km away)
						</li>
						<li className="p-3 bg-yellow-100 rounded-xl">
							O+ request at Murtala General Hospital (4km)
						</li>
					</ul>
				</div>

				{/* Reward + Leaderboard Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="bg-white rounded-2xl p-4 shadow">
						<h3 className="text-lg font-bold mb-2">Your Rewards</h3>
						<p className="text-sm text-gray-600">
							Redeem your IDT tokens for health insurance or goods.
						</p>
						<button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-xl">
							Redeem Tokens
						</button>
					</div>
					<div className="bg-white rounded-2xl p-4 shadow">
						<h3 className="text-lg font-bold mb-2">Top Donors This Month</h3>
						<ul className="space-y-1 text-sm">
							<li>1. Aisha Bello - 5 donations</li>
							<li>2. Kabiru Musa - 4 donations</li>
							<li>3. Sarah Emmanuel - 4 donations</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
