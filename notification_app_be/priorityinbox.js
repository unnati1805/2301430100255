const fetchNotifications = require("./fetchNotifications");

const WEIGHTS = {
  Placement: 10,
  Result: 8,
  Event: 5
};

function calculatePriority(notification) {

  const weightScore =
    WEIGHTS[notification.Type] || 1;

  const timestamp =
    new Date(notification.Timestamp);

  const ageMinutes =
    (Date.now() - timestamp) / (1000 * 60);

  const recencyScore =
    Math.max(0, 100 - ageMinutes);

  return weightScore * 100 + recencyScore;
}

async function getTopNotifications() {

  const notifications =
    await fetchNotifications();

  const sorted =
    notifications
      .map(notification => ({
        ...notification,
        priority:
          calculatePriority(notification)
      }))
      .sort(
        (a, b) =>
          b.priority - a.priority
      )
      .slice(0, 10);

  console.table(sorted);
}

getTopNotifications();